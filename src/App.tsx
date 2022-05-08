import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProjectPage from "./components/main/ProjectPage";
import MainApp from "./MainApp";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
