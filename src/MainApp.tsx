import Header from "./components/Header";

import Projects from "./components/Projects";

function MainApp(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Projects />
      {/* <Updates />
      <Platforms /> */}
    </div>
  );
}

export default MainApp;
