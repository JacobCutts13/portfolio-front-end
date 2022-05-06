import React from "react";
import p5 from "p5";

interface IProps {
  name: string;
}

interface IPosition {
  x: number;
  y: number;
}

interface IParticle {
  position: IPosition;
  velocity: {
    x: number;
    y: number;
  };
  size: number;
  colour: number;
}

class ElectricParticles extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = p.windowWidth;
    let height = p.windowHeight;
    const particles: IParticle[] = [];
    const minDistance = 150;

    p.setup = () => {
      p.createCanvas(width, height);
      createParticles();
    };

    p.draw = () => {
      p.background("#303030");
      moveAllParticles();
      drawAllParticles();
      drawParticleConnections();
    };

    function createParticles(): void {
      const numOfParticlesToCreate = width / 22;
      for (let i = 0; i < numOfParticlesToCreate; i++) {
        const particle = {
          position: randomScreenPosition(),
          velocity: randomVelocity(),
          size: p.random(2, 10),
          colour: p.random(120, 200),
        };
        particles.push(particle);
      }
    }

    function drawAllParticles(): void {
      for (const particle of particles) {
        drawOneParticle(particle);
      }
    }

    function drawOneParticle(particle: IParticle): void {
      p.fill(particle.colour);
      p.circle(particle.position.x, particle.position.y, particle.size);
    }

    function moveAllParticles(): void {
      for (const particle of particles) {
        moveOneParticle(particle);
      }
    }

    function moveOneParticle(particle: IParticle): void {
      particle.position.x += particle.velocity.x;
      particle.position.y += particle.velocity.y;
      if (isOffscreen(particle.position)) {
        repositionParticle(particle);
      }
    }

    function isOffscreen(position: IPosition) {
      const { x, y } = position;
      return x < 0 || x > width || y < 0 || y > height;
    }

    function repositionParticle(particle: IParticle): void {
      particle.position = randomScreenPosition();
    }

    function randomScreenPosition(): IPosition {
      return {
        x: p.random(0, width),
        y: p.random(0, height),
      };
    }

    function randomVelocity(): IPosition {
      return {
        x: p.random(-1.5, 1.5),
        y: p.random(-1.5, 1.5),
      };
    }

    function drawParticleConnections(): void {
      for (let i = 0; i < particles.length; i++) {
        const [x1, y1] = [particles[i].position.x, particles[i].position.y];
        for (let j = i + 1; j < particles.length; j++) {
          const [x2, y2] = [particles[j].position.x, particles[j].position.y];
          if (p.dist(x1, y1, x2, y2) < minDistance) {
            p.stroke(255, 100);
            p.line(x1, y1, x2, y2);
          }
        }
        if (p.dist(x1, y1, p.mouseX, p.mouseY) < minDistance) {
          p.stroke("red");
          p.line(x1, y1, p.mouseX, p.mouseY);
        }
      }
    }

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
    this.myP5.remove();
  }

  render(): JSX.Element {
    return <div ref={this.myRef}></div>;
  }
}

export default ElectricParticles;
