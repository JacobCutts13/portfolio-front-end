import { Link, useLocation } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Link as SmoothLink } from "react-scroll";
import { IProject } from "./Projects";
import Fireworks from "../../sketches/fireworks/Fireworks";
import RayCast from "../../sketches/rayCast/RayCast";
import GameOfLife from "../../sketches/GameOfLife";
import ElectricParticles from "../../sketches/ElectricParticles";
import SimpleOrbits from "../../sketches/SimpleOrbits";
import pastebinImage from "../../assets/pastebin.png";
import pupVoteImage from "../../assets/pup-vote.png";
import ProjectLikeButton from "./projectLikeButton";

export default function ProjectPage(): JSX.Element {
  const location = useLocation();

  const project = location.state as IProject;

  return (
    <>
      <header id="Header">
        <div style={{ position: "absolute", zIndex: -1, top: 0, left: 0 }}>
          {project.title === "Simple Orbits" && <SimpleOrbits />}
          {project.title === "Ray Cast" && <RayCast />}
          {project.title === "Game Of Life" && <GameOfLife />}
          {project.title === "Fireworks" && <Fireworks />}
          {project.title === "Electric Particles" && <ElectricParticles />}
          {project.full_image === "pastebin.png" && (
            <img src={pastebinImage} alt={project.title + "homepage"} />
          )}
          {project.full_image === "pup-vote.png" && (
            <img src={pupVoteImage} alt={project.title + "homepage"} />
          )}
        </div>

        <div
          style={{
            position: "absolute",
            zIndex: -1,
            top: "5%",
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {project.title === "Animal Invaders" && (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/oTyEbLO5aJs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          {project.title === "Galaxy Simulation" && (
            <div className="galaxy-gifs">
              <iframe
                src="https://giphy.com/embed/OWkj7pXnzSWFPpcmlc"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ background: "#FFFFFF" }}
                title="All"
              ></iframe>
              <iframe
                src="https://giphy.com/embed/ZbXGHAhqIT2ouBAlWJ"
                width="200"
                height="200"
                frameBorder="0"
                allowFullScreen
                style={{ background: "#FFFFFF" }}
                title="tidal tails"
              ></iframe>
            </div>
          )}
        </div>

        <nav id="nav-wrap">
          <ul id="nav-project" className="nav">
            <li>
              <Link
                to="/"
                className="home-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </Link>
            </li>
          </ul>
        </nav>

        <div className="row project-banner">
          <div className="banner-text">
            <Fade direction="up" delay={2000} duration={2000}>
              {/* {project.external_url !== "" && (
                <div className="vist-link">
                  <button className="project-about-comments center">
                    <a
                      className="vist"
                      href={project.external_url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Vist
                    </a>
                  </button>
                </div>
              )} */}
            </Fade>

            <Fade direction="up" cascade={true} delay={3000} duration={2000}>
              <div className="project-about-comments">
                <SmoothLink
                  className="project-nav-button"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={800}
                >
                  <button className="project-nav-button">About</button>
                </SmoothLink>
                <SmoothLink
                  className="project-nav-button"
                  to="discussion"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  <button className="project-nav-button">Discussion</button>
                </SmoothLink>
              </div>

              <ProjectLikeButton project={project} />
            </Fade>
          </div>
        </div>
      </header>

      <section id="about">
        <iframe
          title={project.title + " Journal"}
          src={project.iframe}
        ></iframe>
      </section>

      <section id="discussion">
        <Fade direction="right" duration={2000}>
          <div className="row">
            <h1>Discussion</h1>
            <p>Coming soon!</p>
          </div>
        </Fade>
      </section>
    </>
  );
}
