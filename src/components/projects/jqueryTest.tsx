import React from "react";
import $ from "jquery";
import mojs from "@aloento/mojs";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Fireworks from "../../sketches/fireworks/Fireworks";

interface IProps {
  name: string;
}

class JqueryTest extends React.Component<IProps, { activeClass: string }> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      activeClass: "",
    };
    this.changeActiveButton = this.changeActiveButton.bind(this);
  }

  likeQuery(): void {
    //like button
    const scaleCurve = mojs.easing.path(
      "M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0"
    );
    const el = document.querySelector<HTMLElement>(".animated-like-button");

    // mo.js timeline obj
    const timeline = new mojs.Timeline();

    // tweens for the animation:
    const parentValue = el ? el : "parent";
    // burst animation
    const tween1 = new mojs.Burst({
      parent: parentValue,
      // radius:   { 0: 100 },
      angle: { 0: 45 },
      y: -10,
      count: 10,
      radius: 100,
      degree: 360,
      timeline: {},
      children: {
        shape: "circle",
        radius: 30,
        fill: ["#1f68e1", "white"],
        strokeWidth: 15,
        duration: 500,
      },
    });

    const tween2 = new mojs.Tween({
      duration: 900,
      onUpdate: function (progress) {
        const scaleProgress = scaleCurve(progress);
        if (el !== null) {
          el.style.transform = el.style.transform =
            "scale3d(" + scaleProgress + "," + scaleProgress + ",1)";
        }
      },
    });
    const tween3 = new mojs.Burst({
      parent: parentValue,
      // radius:   { 0: 100 },
      angle: { 0: 45 },
      y: -10,
      count: 10,
      radius: 125,
      degree: 360,
      timeline: {},
      children: {
        shape: "circle",
        radius: 30,
        fill: ["white", "#1f68e1"],
        strokeWidth: 15,
        duration: 400,
      },
    });

    // add tweens to timeline:
    timeline.add(tween1, tween2, tween3);

    // when clicking the button start the timeline/animation:
    $(".animated-like-button").on("click", () => {
      if (this.state.activeClass === " active") {
        $(this).removeClass("active");
      } else {
        timeline.play();
        $(this).addClass("active");
      }
    });
  }

  changeActiveButton(): void {
    const newState =
      this.state.activeClass === ""
        ? { activeClass: " active" }
        : { activeClass: "" };
    this.setState(newState);
  }

  componentDidMount(): void {
    this.likeQuery();
  }

  render(): JSX.Element {
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
                    <button className="project-nav-button"> About </button>
                  </a>
                  <a className="project-nav-button" href="#comments">
                    <button className="project-nav-button">Comments</button>
                  </a>
                </div>
              </Fade>
              <div className="animated-like-container">
                <button
                  id="animated-like"
                  className={"animated-like-button" + this.state.activeClass}
                  onClick={this.changeActiveButton}
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

        <section id="comments"></section>
      </>
    );
  }
}

export default JqueryTest;
