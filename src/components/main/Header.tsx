import { useEffect, useState } from "react";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Link as SmoothLink } from "react-scroll";
import { IProject } from "./Projects";
import GameOfLife from "../../sketches/GameOfLife";
import SimpleOrbits from "../../sketches/SimpleOrbits";
import RayCast from "../../sketches/rayCast/RayCast";
import Fireworks from "../../sketches/fireworks/Fireworks";
import ElectricParticles from "../../sketches/ElectricParticles";

interface IPickSketch {
  name: string;
  isClick: boolean;
  id: number;
}

export default function Header(): JSX.Element {
  const mySketches: IPickSketch[] = [
    { name: "Simple-Orbits", isClick: false, id: 5 },
    { name: "Game-Of-Life", isClick: true, id: 3 },
    { name: "Ray-Cast", isClick: false, id: 4 },
    { name: "Fireworks", isClick: true, id: 7 },
    { name: "Electric-Particles", isClick: false, id: 9 },
  ];

  const [sketch, setSketch] = useState<IPickSketch>({
    name: "",
    isClick: false,
    id: 0,
  }); //store current and previous sketch to remove
  const [sketchInfo, setSketchInfo] = useState<IProject>();

  useEffect(() => {
    pickRandomSketch(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pickRandomSketch = async () => {
    let newSketch = mySketches[Math.floor(Math.random() * mySketches.length)]; //pick random sketch
    while (newSketch.name === sketch.name) {
      newSketch = mySketches[Math.floor(Math.random() * mySketches.length)]; //reroll until different sketchid
    }
    setSketch(newSketch); //set new sketch

    axios
      .get(
        "https://jc13-portfolio.herokuapp.com/projects/" +
          newSketch.id.toString()
      )
      .then((resp) => setSketchInfo(resp.data[0]))
      .catch((err) => console.log(err));
  };

  return (
    <header id="Header">
      <div style={{ position: "absolute", zIndex: -1, top: 0, left: 0 }}>
        {sketch.name === "Simple-Orbits" && <SimpleOrbits />}
        {sketch.name === "Ray-Cast" && <RayCast />}
        {sketch.name === "Game-Of-Life" && <GameOfLife />}
        {sketch.name === "Fireworks" && <Fireworks />}
        {sketch.name === "Electric-Particles" && <ElectricParticles />}
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
            <Fade direction="up" duration={2000} delay={1000}>
              <h3>
                Junior Software Engineer<br></br>Try clicking!
                <hr />
              </h3>
            </Fade>
          )}

          {!sketch.isClick && (
            <Fade direction="up" duration={2000} delay={1000}>
              <h3>
                Junior Software Engineer<br></br>Try moving your mouse!
                <hr />
              </h3>
            </Fade>
          )}

          {sketchInfo !== undefined && (
            <Fade direction="up" duration={2000} delay={1000}>
              <div className="sketch-buttons-container">
                <Link
                  to="/project"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    console.log("sending: " + sketchInfo);
                  }}
                  state={sketchInfo}
                  className="this-sketch"
                >
                  This Sketch
                </Link>
                <button onClick={() => pickRandomSketch()}>New Sketch</button>
              </div>
            </Fade>
          )}

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
        <SmoothLink
          className="smoothscroll"
          to="projects"
          spy={true}
          smooth={true}
          duration={800}
        >
          <i className="icon-down-circle"></i>
        </SmoothLink>
      </p>
    </header>
  );
}
