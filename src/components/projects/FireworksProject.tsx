import { Link } from "react-router-dom";
import Fireworks from "../../sketches/fireworks/Fireworks";

export default function FireworksProject(): JSX.Element {
  return (
    <>
      <header id="Header">
        <div style={{ position: "absolute", zIndex: -1, top: 0, left: 0 }}>
          <Fireworks />
        </div>

        <Link to="/">Home</Link>

        {/* <Fade direction="up">
          <div className="project-nav">
            <div className="about-comments">
              <a className="smoothscroll" href="#About">
                About
              </a>
              <a className="smoothscroll" href="#Comments">
                Comments
              </a>
            </div>
          </div>
        </Fade> */}
      </header>
    </>
  );
}
