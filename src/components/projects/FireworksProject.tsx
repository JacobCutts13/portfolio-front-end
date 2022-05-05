import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Link as SmoothLink } from 'react-scroll'
import Fireworks from "../../sketches/fireworks/Fireworks";
import likeJQuery from "../../jquery/likeJQuery";

export default function FireworksProject(): JSX.Element {
  useEffect(() => {
    likeJQuery(); //run script to animate like button
  }, []); 

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
                <SmoothLink className="project-nav-button" to="about" spy={true} smooth={true} duration={500}>
                  <button className="project-nav-button">About</button>
                </SmoothLink>
                <SmoothLink className="project-nav-button" to="discussion" spy={true} smooth={true} duration={800}>
                  <button className="project-nav-button">Discussion</button>
                </SmoothLink>
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
          title="Fireworks Journal"
          src="https://v1.embednotion.com/embed/5f5e1bfc7fb049089fa8e307866839e8"
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
