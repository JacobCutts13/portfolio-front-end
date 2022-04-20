import Header from "./components/Header";
import About from "./components/About";
import Updates from "./components/Updates";
import Projects from "./components/Projects";
import Platforms from "./components/Platforms";

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <About />
      <Updates />
      <Projects />
      <Platforms />
    </div>
  );
}

export default App;
