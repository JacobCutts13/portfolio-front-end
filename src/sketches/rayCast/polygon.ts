import p5 from "p5";

interface IpolygonInit {
  p: p5;
  x: number;
  y: number;
  r: number;
  nvert: number;
}

export default class Polygon {
  public p: p5;
  public x: number;
  public y: number;
  public r: number;
  public nvert: number;

  constructor(init: IpolygonInit) {
    //starting point, radius and number of vertices
    this.x = init.x;
    this.y = init.y;
    this.r = init.r;
    this.nvert = init.nvert;
    this.p = init.p;
  }
  returnVert(): p5.Vector[] {
    const vert = [];
    const angle = this.p.TWO_PI / this.nvert;

    for (let i = 0; i < this.p.TWO_PI; i += angle) {
      const vx = this.x + this.p.cos(i) * this.r;
      const vy = this.y + this.p.sin(i) * this.r;
      const vv = this.p.createVector(vx, vy);
      vert.push(vv);
    }

    return vert;
  }
}
