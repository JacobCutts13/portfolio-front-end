import { Routes, Route, BrowserRouter } from "react-router-dom";
import FireworksProject from "./components/projects/FireworksProject";
import GameOfLifeProject from "./components/projects/GameOfLifeProject";
import RayCastProject from "./components/projects/RayCastProject";
import SimpleOrbitsProject from "./components/projects/SimpleOrbitsProject";
import GalaxySimulation from "./components/projects/GalaxySimulation";
import PastebinProject from "./components/projects/PastebinProject";
import MainApp from "./MainApp";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/Simple-Orbits" element={<SimpleOrbitsProject />} />
        <Route path="/Game-Of-Life" element={<GameOfLifeProject />} />
        <Route path="/Fireworks" element={<FireworksProject />} />
        <Route path="/Ray-Cast" element={<RayCastProject />} />
        <Route path="/Galaxy-Simulation" element={<GalaxySimulation />} />
        <Route path="/Pastebin" element={<PastebinProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
