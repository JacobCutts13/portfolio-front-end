import Header from "./components/Header";
import Updates from "./components/Updates";
import Projects from "./components/Projects";
import Platforms from "./components/Platforms";

function MainApp(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Projects />
      <Updates />
      <Platforms />
    </div>
  );
}

export default MainApp;
