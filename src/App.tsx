import Projects from "./components/Projects";
import Header from "./components/Header";

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Projects />;
    </div>
  );
}

export default App;
