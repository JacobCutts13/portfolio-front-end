import p5 from "p5";

export interface IinitWall {
  p: p5;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export default class Wall {
  public x1: number;
  public y1: number;
  public x2: number;
  public y2: number;
  public p: p5;

  constructor(init: IinitWall) {
    this.x1 = init.x1;
    this.y1 = init.y1;
    this.x2 = init.x2;
    this.y2 = init.y2;
    this.p = init.p;
  }
  show(): void {
    this.p.line(this.x1, this.y1, this.x2, this.y2);
  }
}
