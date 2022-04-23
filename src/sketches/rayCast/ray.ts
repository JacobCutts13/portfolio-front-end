import p5 from "p5";
import Wall from "./wall";

interface IrayInit {
  p: p5;
  pos: p5.Vector;
  dir: p5.Vector;
}

export default class Ray {
  public p: p5;
  public pos: p5.Vector;
  public dir: p5.Vector;
  constructor(rayinit: IrayInit) {
    this.p = rayinit.p;
    this.pos = rayinit.pos;
    this.dir = rayinit.dir;
  }

  //does this ray intersect with wall
  intersection(
    x: number,
    y: number,
    walls: Wall[]
  ): [isIntersect: boolean, pX: number, pY: number, wallIndex: number] {
    let minD = 10000; //distance of closest wall to interect with array
    let [pX, pY] = [0, 0]; //closest interection points
    let isIntersect = false;
    let wallIndex = 0;

    for (const wall of walls) {
      const x1 = x;
      const y1 = y;
      const x2 = x + this.dir.x;
      const y2 = y + this.dir.y;

      const x3 = wall.x1;
      const y3 = wall.y1;
      const x4 = wall.x2;
      const y4 = wall.y2;

      const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
      const u = ((x1 - x3) * (y1 - y2) - (y1 - y3) * (x1 - x2)) / den;
      const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;

      //true if intersection
      if (t > 0 && u > 0 && u < 1) {
        const px = x1 + t * (x2 - x1);
        const py = y1 + t * (y2 - y1);
        const d = this.p.dist(x1, y1, px, py);
        if (d < minD) {
          wallIndex = walls.indexOf(wall);
          [isIntersect, pX, pY, minD] = [true, px, py, d];
        }
      }
    }
    return [isIntersect, pX, pY, wallIndex];
  }
  show(x: number, y: number, px: number, py: number): void {
    this.p.line(x, y, px, py);
  }
}
