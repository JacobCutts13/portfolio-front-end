import p5 from "p5";

export default class Particle {
  //starting x, y value
  public pos: p5.Vector;
  public vel: p5.Vector;
  public acc: p5.Vector;
  public p: p5;
  public colour: string;
  public timeLeft: number;
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
    this.timeLeft = p.random(50, 100);
  }

  applyForce(force: p5.Vector): void {
    this.acc.add(force);
  }

  update(): void {
    this.vel.add(this.acc);
    this.vel.add(p5.Vector.random2D().mult(0.15)); //fake turbulence
    this.pos.add(this.vel);
    this.acc.mult(0); //reset acceleration each time
  }

  show(colour?: string): void {
    const alpha = this.p.round(this.p.map(this.timeLeft, 100, 0, 255, 0, true));
    const alphaCol = this.colour + this.p.hex(alpha, 2);
    const chosenColour = colour ? colour : alphaCol;
    this.p.push();
    this.p.stroke(chosenColour);
    this.p.strokeWeight(1);
    this.p.line(
      this.pos.x,
      this.pos.y,
      this.pos.x - 2 * this.vel.x,
      this.pos.y - 2 * this.vel.y
    );
    this.p.pop();
  }
}
