import { Link } from "react-router-dom";
import SimpleOrbits from "../../sketches/SimpleOrbits";

export default function SimpleOrbitsProject(): JSX.Element {
  return (
    <>
      <section id="Header">
        <div style={{ position: "absolute", zIndex: -1, top: 0, left: 0 }}>
          <SimpleOrbits />
        </div>
        <Link to="/">Home</Link>
      </section>
    </>
  );
}
