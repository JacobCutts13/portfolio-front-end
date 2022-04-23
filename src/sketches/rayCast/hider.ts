import p5 from "p5";
import Wall from "./wall";

const length = 10;

export default class Hider {
  public p: p5;
  public x: number;
  public y: number;
  public hidden: boolean;
  public wallIndex: number[];
  public walls: Wall[];
  constructor(p: p5, width: number, height: number) {
    this.p = p;
    this.x = p.random(0, width);
    this.y = p.random(0, height);
    this.hidden = true;
    this.wallIndex = [];

    //draw 4 walls
    const topWall = new Wall({
      p: this.p,
      x1: this.x,
      y1: this.y,
      x2: this.x + length,
      y2: this.y,
    });
    const rightWall = new Wall({
      p: this.p,
      x1: this.x + length,
      y1: this.y,
      x2: this.x + length,
      y2: this.y + length,
    });
    const bottomWall = new Wall({
      p: this.p,
      x1: this.x + length,
      y1: this.y + length,
      x2: this.x,
      y2: this.y + length,
    });
    const leftWall = new Wall({
      p: this.p,
      x1: this.x,
      y1: this.y,
      x2: this.x,
      y2: this.y + length,
    });
    this.walls = [topWall, rightWall, bottomWall, leftWall];
  }
  show(): void {
    if (!this.hidden) {
      this.p.push();
      this.p.fill("red");
      this.p.square(this.x, this.y, length);
      this.p.pop();
    }
    for (const wall of this.walls) {
      this.p.push();
      this.p.stroke(0);
      wall.show();
      this.p.pop();
    }
  }
  setIndex(i: number): void {
    this.wallIndex = [i, i + 1, i + 2, i + 3];
  }
}
