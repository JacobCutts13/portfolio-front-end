import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import GameOfLife from "../sketches/GameOfLife";
import SimpleOrbits from "../sketches/SimpleOrbits";
import RayCast from "../sketches/rayCast/RayCast";
import Fireworks from "../sketches/fireworks/Fireworks";

interface IPickSketch {
  name: string;
  isClick: boolean;
}

export default function Header(): JSX.Element {
  const mySketches: IPickSketch[] = [
    { name: "Simple Orbits", isClick: false },
    { name: "Game Of Life", isClick: true },
    { name: "Ray Cast", isClick: false },
    { name: "Fireworks", isClick: true },
  ];

  const [sketch, setSketch] = useState<IPickSketch>({
    name: "Simple Orbits",
    isClick: false,
  }); //store current and previous sketch to remove

  useEffect(() => {
    pickRandomSketch(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pickRandomSketch = () => {
    let newSketch = mySketches[Math.floor(Math.random() * mySketches.length)]; //pick random sketch
    while (newSketch.name === sketch.name) {
      newSketch = mySketches[Math.floor(Math.random() * mySketches.length)]; //reroll until different sketchid
    }
    setSketch(newSketch); //set new sketch
  };

  return (
    <header id="Header">
      <div style={{ position: "absolute", zIndex: -1, top: 0, left: 0 }}>
        {sketch.name === "Simple Orbits" && <SimpleOrbits />}
        {sketch.name === "Ray Cast" && <RayCast />}
        {sketch.name === "Game Of Life" && <GameOfLife />}
        {sketch.name === "Fireworks" && <Fireworks />}
      </div>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#Header">
              Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#projects">
              Projects
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#updates">
              Updates
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#platforms">
              Platforms
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Fade direction="up" duration={2000}>
            <h1 className="responsive-headline">Jacob Cutts</h1>
          </Fade>
          {sketch.isClick && (
            <Fade direction="up" duration={3000} cascade={true}>
              <h3>
                Junior Software Engineer<br></br>Try clicking!
              </h3>
              <div>
                <button onClick={() => pickRandomSketch()}>This Sketch</button>
                <button onClick={() => pickRandomSketch()}>New Sketch</button>
              </div>
            </Fade>
          )}
          {!sketch.isClick && (
            <Fade direction="up" duration={3000} cascade={true}>
              <h3>
                Junior Software Engineer<br></br>Try moving your mouse!
              </h3>
              <div>
                <button onClick={() => pickRandomSketch()}>This Sketch</button>
                <button onClick={() => pickRandomSketch()}>New Sketch</button>
              </div>
            </Fade>
          )}

          <hr />
          {/* <Fade direction="up" duration={2000}>
              <ul className="social">
                <a href="#projects" className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href="#projects" className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade> */}
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#projects">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}
