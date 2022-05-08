import tidal_tails from "../../assets/tidal-tails.gif";
import parabolic_all from "../../assets/parabolic-all.gif";

export default function GalaxySimulationGif(): JSX.Element {
  return (
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
  );
}
