import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Link as SmoothLink } from "react-scroll";
import likeJQuery from "../../jquery/likeJQuery";
import tidal_tails from "../../assets/tidal-tails.gif";
import parabolic_all from "../../assets/parabolic-all.gif";

export default function GalaxySimulation(): JSX.Element {
  const [positiveLike, setpositiveLike] = useState<boolean>(true);
  const [totalLikes, setTotalLikes] = useState<number>(0);

  useEffect(() => {
    likeJQuery(); //run script to animate like button
    const getTotalLikes = async () => {
      axios
        .get("https://jc13-portfolio.herokuapp.com/projects/6/likes")
        .then((resp) => setTotalLikes(parseInt(resp.data[0].sum)))
        .catch((err) => console.log(err));
    };
    getTotalLikes();
  }, []);

  const postLike = async () => {
    const ApiUrl = "https://jc13-portfolio.herokuapp.com/projects/6/likes";
    const value = positiveLike ? 1 : -1;
    try {
      axios
        .post(ApiUrl, { value: value })
        .then(() => setTotalLikes(totalLikes + value)) //update likes
        .then(() => setpositiveLike(!positiveLike));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <header id="Header">
        <div
          style={{
            position: "absolute",
            zIndex: -1,
            top: 0,
            left: 0,
            width: "100%",
          }}
        >
          <div className="galaxy-sim-image-container">
            <img
              className="galaxy-sim-image"
              src={tidal_tails}
              alt="Tidal tails"
            ></img>
            <img
              className="galaxy-sim-image"
              src={parabolic_all}
              alt="Tidal tails"
            ></img>
          </div>
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
                <SmoothLink
                  className="project-nav-button"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <button className="project-nav-button">About</button>
                </SmoothLink>
                <SmoothLink
                  className="project-nav-button"
                  to="discussion"
                  spy={true}
                  smooth={true}
                  duration={800}
                >
                  <button className="project-nav-button">Discussion</button>
                </SmoothLink>
              </div>
            </Fade>
            <div className="animated-like-container">
              <button
                id="animated-like"
                className="animated-like-button"
                onClick={postLike}
              ></button>
            </div>
            <h3>{totalLikes}</h3>
          </div>
        </div>
      </header>

      <section id="about">
        <iframe
          title="Fireworks Journal"
          src="https://v1.embednotion.com/embed/54d03176022f4a09836e2b6b924043cf"
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
