import React from "react";
import p5 from "p5";
import Firework from "./firework";

interface IProps {
  name: string;
}
class Fireworks extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let fireworks: Firework[] = [];
    const f = 0.03; //chance of spawning a firework each frame
    let width = p.windowWidth;
    let height = p.windowHeight;
    p.setup = () => {
      p.createCanvas(width, height);
      p.stroke(255);
      p.strokeWeight(5);
    };

    p.draw = () => {
      p.background(30, 100);

      //randomly spawn new fire works
      if (p.random(1) < f) {
        fireworks.push(new Firework(p, false, 0, 0, width, height));
      }

      //remove dead fireworks
      fireworks = fireworks.filter((f) => f.alive);

      for (const i in fireworks) {
        fireworks[i].update();
        fireworks[i].show();
      }
    };
    p.mousePressed = () => {
      if (p.mouseY < height) {
        fireworks.push(
          new Firework(p, true, p.mouseX, p.mouseY, width, height)
        );
      }
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      width = p.windowWidth;
      height = p.windowHeight;
    };
  };

  componentDidMount(): void {
    const node: HTMLElement | undefined =
      this.myRef.current === null ? undefined : this.myRef.current;
    this.myP5 = new p5(this.Sketch, node);
  }

  componentWillUnmount(): void {
    console.log("unmounting Fireworks");
    this.myP5.remove();
  }

  render(): JSX.Element {
    return <div ref={this.myRef}></div>;
  }
}

export default Fireworks;
