import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Fireworks from "../../sketches/fireworks/Fireworks";
import likeJQuery from "../../jquery/likeJQuery";

export default function FireworksProject(): JSX.Element {
  useEffect(() => likeJQuery(), []); //run script to animate like button

  return (
    <>
      <header id="Header">
        <div style={{ position: "absolute", zIndex: -1, top: 0, left: 0 }}>
          <Fireworks />
        </div>

        <nav id="nav-wrap">
          <ul id="nav-project" className="nav">
            <li>
              <Link to="/" className="home-link">
                Home
              </Link>
            </li>
          </ul>
        </nav>

        <div className="row project-banner">
          <div className="banner-text">
            <Fade direction="up">
              <div className="project-about-comments">
                <a className="project-nav-button" href="#about">
                  <button className="project-nav-button">About</button>
                </a>
                <a className="project-nav-button" href="#discussion">
                  <button className="project-nav-button">Discussion</button>
                </a>
              </div>
            </Fade>
            <div className="animated-like-container">
              <button
                id="animated-like"
                className="animated-like-button"
                onClick={() => console.log("liked")}
              ></button>
            </div>
          </div>
        </div>
      </header>

      <section id="about">
        <iframe
          title="fireworks-about"
          src="https://v1.embednotion.com/embed/9022da6e4c85461286d70b7dfcbe19d3"
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
