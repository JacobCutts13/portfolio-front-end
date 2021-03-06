import React from "react";
import p5 from "p5";

interface IProps {
  name: string;
}
class GameOfLife extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let locked = false;
    let population: number[][] = [];
    const cellSize = 20;
    const liveRate = 0.1;
    let width = p.windowWidth;
    let height = p.windowHeight;
    const popSize = {
      col: Math.floor(width / cellSize),
      row: Math.floor(height / cellSize),
    };
    p.setup = () => {
      p.createCanvas(width, height);
      p.background("black");
      p.frameRate(15);
      createPop(popSize);
    };

    p.draw = () => {
      p.stroke(30);

      drawCells();
      if (!locked) {
        updateCells();
      }
    };

    function createPop(popSize: { col: number; row: number }): void {
      population = [...Array(popSize.row)].map((e) =>
        Array(popSize.col).fill(1)
      );
      for (let row = 0; row < popSize.row; row++) {
        for (let col = 0; col < popSize.col; col++) {
          const val = Math.random() < liveRate ? 1 : 0;
          population[row][col] = val;
        }
      }
    }
    function drawCells() {
      for (let row = 0; row < popSize.row; row++) {
        for (let col = 0; col < popSize.col; col++) {
          const colour = population[row][col] === 1 ? "white" : "black";
          p.fill(colour);
          p.square(col * cellSize, row * cellSize, cellSize);
        }
      }
    }
    function updateCells() {
      const populationtmp = [...Array(popSize.row)].map((e) =>
        Array(popSize.col).fill(1)
      );
      for (let row = 0; row < popSize.row; row++) {
        for (let col = 0; col < popSize.col; col++) {
          const liveNeighbours = countLiveNeighbours(row, col);
          if (population[row][col] === 1) {
            populationtmp[row][col] =
              liveNeighbours === 2 || liveNeighbours === 3 ? 1 : 0;
          } else {
            populationtmp[row][col] = liveNeighbours === 3 ? 1 : 0;
          }
        }
      }
      population = populationtmp;
    }
    function countLiveNeighbours(row: number, col: number) {
      const left = col === 0 ? 0 : population[row][col - 1];
      const right = col === popSize.col - 1 ? 0 : population[row][col + 1];
      const up = row === 0 ? 0 : population[row - 1][col];
      const down = row === popSize.row - 1 ? 0 : population[row + 1][col];

      const upLeft = row === 0 || col === 0 ? 0 : population[row - 1][col - 1];
      const upRight =
        row === 0 || col === popSize.col - 1 ? 0 : population[row - 1][col + 1];
      const downLeft =
        row === popSize.row - 1 || col === 0 ? 0 : population[row + 1][col - 1];
      const downRight =
        row === popSize.row - 1 || col === popSize.col - 1
          ? 0
          : population[row + 1][col + 1];

      const liveNeighbours =
        left + right + up + down + upLeft + upRight + downLeft + downRight;
      return liveNeighbours;
    }

    p.mousePressed = () => {
      if (p.mouseY < height && p.mouseX < width) {
        locked = true;
        const mouseRow = Math.floor(p.mouseY / cellSize);
        const mouseCol = Math.floor(p.mouseX / cellSize);
        population[mouseRow][mouseCol] = 1;
      }
    };

    p.mouseDragged = () => {
      if (locked) {
        const mouseRow = Math.floor(p.mouseY / cellSize);
        const mouseCol = Math.floor(p.mouseX / cellSize);
        population[mouseRow][mouseCol] = 1;
      }
    };

    p.mouseReleased = () => {
      locked = false;
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
    this.myP5.remove();
  }

  render(): JSX.Element {
    return <div ref={this.myRef}></div>;
  }
}

export default GameOfLife;
