import { Fade } from "react-awesome-reveal";
import GameOfLife from "../sketches/GameOfLife";

export default function Header(): JSX.Element {
  return (
    <header id="Header">
      <div style={{position: "absolute",zIndex: -1,top: 0,left: 0}}>
        <GameOfLife />
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
          <Fade direction="up" duration={3000}>
            <h3>Hello</h3>
          </Fade>
          <hr />
          {/* <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href={github} className="button btn github-btn">
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
