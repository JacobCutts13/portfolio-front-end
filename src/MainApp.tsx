import Header from "./components/main/Header";

import Projects from "./components/main/Projects";

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
