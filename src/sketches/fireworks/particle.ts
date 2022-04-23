import p5 from "p5";

export default class Particle {
  //starting x, y value
  public pos: p5.Vector;
  public vel: p5.Vector;
  public acc: p5.Vector;
  public p: p5;
  public colour: string;
  constructor(
    p: p5,
    x: number,
    y: number,
    vx: number,
    vy: number,
    colour: string
  ) {
    this.p = p;
    this.pos = p.createVector(x, y);
    this.vel = p.createVector(vx, vy);
    this.acc = p.createVector(0, 0);
    this.colour = colour;
  }

  applyForce(force: p5.Vector): void {
    this.acc.add(force);
  }

  update(): void {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); //reset acceleration each time
  }

  show(age: number): void {
    const alpha = Math.round(this.p.map(age, 0, 100, 255, 0, true));
    const alphaCol = this.colour + this.p.hex(alpha, 2);
    this.p.push();
    this.p.stroke(alphaCol);
    this.p.point(this.pos.x, this.pos.y);
    this.p.pop();
  }
}
