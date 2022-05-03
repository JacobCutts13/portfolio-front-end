import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Fireworks from "../../sketches/fireworks/Fireworks";

export default function FireworksProject(): JSX.Element {
  return (
    <>
      <header id="Header">
        <div style={{ position: "absolute", zIndex: -1, top: 0, left: 0 }}>
          <Fireworks />
        </div>

        <nav id="nav-wrap">
          <ul id="nav-project" className="nav">

            <li>
            <Link to="/">Home</Link>
            </li>
            
          </ul>
        </nav>


        <div className="row project-banner">
        <div className="banner-text">
        
          <Fade direction="up">
            <div className="project-about-comments">
            <a className="project-nav-button" href="#About">
                <button className="project-nav-button">  About  </button>
            </a>
            <a className="project-nav-button" href="#Comments">
                <button className="project-nav-button">Comments</button>
            </a>
            </div>
          </Fade>

          <button id='animated-like' className='animated-like-button' onClick={() => console.log("like")}></button>
        </div>
      </div>

      </header>

      <section id="test">
        <h1>Test</h1>
        <button id='animated-like' className='animated-like-button' onClick={() => console.log("like")}></button>
      </section>
    </>
  );
}
