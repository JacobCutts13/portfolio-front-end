import { Link } from "react-router-dom";
import GameOfLife from "../../sketches/GameOfLife";

export default function GameOfLifeProject(): JSX.Element {
  return (
    <>
      <section id="Header">
        <div style={{ position: "absolute", zIndex: -1, top: 0, left: 0 }}>
          <GameOfLife />
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
