import React from "react";
import p5 from "p5";
import Wall from "./wall";
import Ray from "./ray";
import Polygon from "./polygon";
import Hider from "./hider";

interface IProps {
  name: string;
}
class RayCast extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;


  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();

  }

  Sketch = (p: p5): void => {
    const width = p.windowWidth;
    const height = p.windowHeight;
    const walls: Wall[] = [];
    const rays: Ray[] = [];
    const hiders: Hider[] = [];
    let nHiders = 5;
    p.setup = () => {
        p.createCanvas(width, height);
        p.textSize(20);
    
        createHiders(nHiders);
        const nwalls = Math.floor(width/1000);
        const npoly = Math.floor(width/300);
        createWalls(nwalls, npoly);
    
        const nrays = 1000;
        createRays(nrays);


    
    };

    p.draw = () => {
        p.background(0);
        p.stroke(255, 100);
        const stringCount = "Number of hiders left: " + nHiders
        p.text(stringCount, 0, height)
    
        drawWalls();
        drawRays();
        drawHiders();
    };
    function drawRays() {
        for (const ray of rays) {
            const [isIntersection, px, py, wallIndex] = ray.intersection(p.mouseX, p.mouseY, walls);
            if (isIntersection) {
                ray.show(p.mouseX, p.mouseY, px, py)
            }
            for (const hider of hiders) {
                if (hider.hidden) {
                    if (hider.wallIndex.includes(wallIndex)) {
                        hider.hidden = false;
                        nHiders--
                    }
                }
            }
        }
    }
    function drawWalls() {
        for (const wall of walls) {
            p.push()
            p.stroke(255);
            wall.show();
            p.pop()
        }
    }
    function drawHiders() {
        for (const hider of hiders) {
            hider.show();
        }
    }
    function createRays(nrays: number) {
        const raysPos = p.createVector(p.mouseX, p.mouseY);
        for (let i = 0; i < nrays; i++) {
            const angle = p.map(i, 0, nrays, 0, 2 * p.PI);
            const dir = p5.Vector.fromAngle(angle);
            const ray = new Ray({p: p, pos: raysPos, dir: dir});
            rays.push(ray);
        }
    }
    function createWalls(nwalls: number, npoly: number) {

        //CREATE RANDOM WALLS
        for (let i = 0; i < nwalls; i++) {
            const wall = new Wall({p: p, x1:p.random(0, width), y1:p.random(0, height), x2:p.random(0, width), y2:p.random(0, height)})
            walls.push(wall)
        }
        //RANDOM POLYGONS
        for (let j = 0; j < npoly; j++) {
            const [polyx, polyy] = [p.random(0, width), p.random(0, height)];
            const [polyr, polyn] = [p.random(10, 100), p.random(3, 10)];
            const polygon = new Polygon({p:p, x:polyx, y:polyy, r:polyr, nvert:polyn});
            const polyVert = polygon.returnVert();
            for (let i = 1; i <= polyVert.length; i++) {
                const wall = new Wall({p:p, x1:polyVert[i - 1].x, y1:polyVert[i - 1].y, x2:polyVert[i % polyVert.length].x, y2:polyVert[i % polyVert.length].y});
                walls.push(wall);
            }
        }
        //FIXED BOUNDARIES
        const topWall = new Wall({p: p, x1:0, y1:0, x2:width, y2:0})
        const bottomWall = new Wall({p: p, x1:0, y1:height, x2:width, y2:height})
        const rightWall = new Wall({p: p, x1:width, y1:0, x2:width, y2:height})
        const leftWall = new Wall({p: p, x1:0, y1:0, x2:0, y2:height})
        walls.push(topWall, bottomWall, rightWall, leftWall)
    
        //Hiders
        for (const hider of hiders) {
            const index = walls.length;
            hider.setIndex(index)
            for (const wall of hider.walls) {
                walls.push(wall);
            }
        }
    }
    function createHiders(nHiders: number) {
        for (let i = 0; i < nHiders; i++) {
            const hider = new Hider(p, width, height);
            hiders.push(hider)
        }
    }

   p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      }
  };

  componentDidMount(): void {
    const node: HTMLElement | undefined =
      this.myRef.current === null ? undefined : this.myRef.current;
    this.myP5 = new p5(this.Sketch, node);
  }

  render(): JSX.Element {
    return (
    <div ref={this.myRef}>

    </div>
    );
  }
}

export default RayCast;
