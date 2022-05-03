import { Fade } from "react-awesome-reveal";
export default function About(): JSX.Element {
  return (
    <section id="about">
      <Fade direction="left" duration={2000}>
        <div className="row">
          <div className="two columns">
            <img
              className="profile-pic"
              src="/images/galaxy-sim-preview.png"
              alt="Picuture of me"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About this site</h2>
            <p>
              Hi, programming has always been a passion of mine but it is only
              recently I have made it my career. I have a bachelors in Physics
              which utilised scientific coding extensively. You can see some of
              these projects below.
            </p>
            <p>
              This website is a collection of projects I have made over the last
              6 years in various languages and difficulties. I make it with the
              hopes to attract other developers interested in similar projects
              or as a showcase to employers of my dedication and experience.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
}
