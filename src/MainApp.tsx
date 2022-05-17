import Header from "./components/main/Header";
import Updates from "./components/main/Updates";
import Platforms from "./components/main/Platforms";
import Projects from "./components/main/Projects";

function MainApp(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Projects />
      <Platforms />
      <Updates />
    </div>
  );
}

export default MainApp;
