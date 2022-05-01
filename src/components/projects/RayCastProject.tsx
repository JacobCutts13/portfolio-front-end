import { Link } from "react-router-dom";
import RayCast from "../../sketches/rayCast/RayCast";

export default function RayCastProject(): JSX.Element {
  return (
    <>
      <section id="Header">
        <div style={{ position: "absolute", zIndex: -1, top: 0, left: 0 }}>
          <RayCast />
        </div>
        <div className="project-nav">
          <Link to="/">HomePage</Link>
          <a className="smoothscroll" href="#About">
            About
          </a>
          <a className="smoothscroll" href="#Comments">
            Comments
          </a>
        </div>
      </section>
    </>
  );
}
