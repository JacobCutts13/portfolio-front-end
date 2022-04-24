import p5 from "p5";
import Particle from "./particle";

const explosionSpeed = 6; //max explosion speed
const lifetime = 200; //number of frames firework is alive
const colours = [
  "#f6c700",
  "#fc7f00",
  "#ff2975",
  "#f000ff",
  "#7b00fb",
  "#8fce00",
];

export default class Firework {
  public colour: string;
  public particles: Particle[];
  public p: p5;
  public age: number;
  public ageExploded: number;
  public alive: boolean;
  public exploded: boolean;
  public firework: Particle;
  private gravity: p5.Vector;
  constructor(
    p: p5,
    exploded: boolean,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    this.p = p;
    this.gravity = this.p.createVector(0, 0.2);
    this.colour = this.p.random(colours);
    this.particles = []; //array to keep track of explosion particles
    this.age = 0;
    this.ageExploded = 0;
    this.alive = true;
    this.exploded = exploded;
    const initialSpeed = -Math.sqrt(2 * 0.2 * height); //max initial speed
    this.firework = this.exploded
      ? new Particle(this.p, x, y, this.p.random(-1, 1), 0, this.colour)
      : new Particle(
          this.p,
          this.p.random(0, width),
          height,
          this.p.random(-1, 1),
          this.p.random(initialSpeed / 2, initialSpeed),
          this.colour
        );
  }
  update(): void {
    if (this.exploded && this.particles.length < 1) {
      this.explode();
    }

    if (!this.exploded) {
      this.firework.applyForce(this.gravity);
      this.firework.update();

      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }
    for (const i in this.particles) {
      this.particles[i].applyForce(this.gravity);
      this.particles[i].update();
    }
    this.age++;
    if (this.age > lifetime) {
      this.alive = false;
    }
  }

  show(): void {
    if (!this.exploded) {
      this.firework.show(this.age);
    }
    for (const i in this.particles) {
      this.particles[i].show(this.age - this.ageExploded);
    }
  }

  explode(): void {
    this.ageExploded = this.age;
    for (let i = 0; i < 50; i++) {
      const velocity = p5.Vector.random2D().mult(
        this.p.random(-explosionSpeed / 2, explosionSpeed)
      );
      const p = new Particle(
        this.p,
        this.firework.pos.x,
        this.firework.pos.y,
        velocity.x,
        velocity.y,
        this.colour
      );
      this.particles.push(p);
    }
  }
}
