import React from "react";
import p5 from "p5";

interface IProps {
  name: string;
}
interface Ibody {
  size: number;
  colour: string;
}
class SimpleOrbits extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = p.windowWidth;
    let height = p.windowHeight;
    const sun = { size: 100, colour: "yellow" };
    const earth = { size: 50, colour: "blue" };
    const moon = { size: 10, colour: "white" };
    const miniMoon = { size: 5, colour: "light blue" };
    const mars = { size: 40, colour: "red" };
    p.setup = () => {
      p.createCanvas(width, height);
      p.noStroke();
      p.frameRate(60);
    };

    p.draw = () => {
      p.background(20, 150);

      p.push();
      p.translate(p.mouseX, p.mouseY);
      drawBody(sun);

      p.push();
      p.rotate(p.frameCount / 70);
      p.translate(150, 0);

      drawBody(earth);

      p.rotate(p.frameCount / 30);
      p.translate(50, 0);

      drawBody(moon);

      p.rotate(p.frameCount / 30);
      p.translate(20, 0);

      drawBody(miniMoon);
      p.pop();

      p.rotate(p.frameCount / 60);
      p.translate(300, 150);

      drawBody(mars);

      p.rotate(p.frameCount / 30);
      p.translate(100, 0);

      drawBody(moon);

      p.rotate(p.frameCount / 30);
      p.translate(20, 0);

      drawBody(miniMoon);

      p.rotate(p.frameCount / 30);
      p.translate(10, 0);

      drawBody(miniMoon);
      p.pop();

      p.push();
      p.translate((4 * width) / 5, height / 4);
      drawBody(earth);

      p.push();
      p.rotate(-p.frameCount / 50);
      p.translate(150, 0);

      drawBody(mars);

      p.rotate(-p.frameCount / 40);
      p.translate(40, 0);

      drawBody(miniMoon);
      p.pop();
      p.pop();
    };
    function drawBody(body: Ibody): void {
      p.fill(body.colour);
      p.circle(0, 0, body.size);
    }
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      width = p.windowWidth;
      height = p.windowHeight;
    }
  };

  componentDidMount(): void {
    const node: HTMLElement | undefined =
      this.myRef.current === null ? undefined : this.myRef.current;
    this.myP5 = new p5(this.Sketch, node);
  }

  render(): JSX.Element {
    return <div ref={this.myRef}></div>;
  }
}

export default SimpleOrbits;
