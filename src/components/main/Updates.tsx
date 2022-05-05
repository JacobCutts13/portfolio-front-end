import { Fade } from "react-awesome-reveal";

export default function Updates(): JSX.Element {
  return (
    <section id="updates">
      <Fade direction="right" duration={2000}>
        <div className="row">
          <h1>Updates</h1>
          <p>Coming soon!</p>
        </div>
      </Fade>
    </section>
  );
}
