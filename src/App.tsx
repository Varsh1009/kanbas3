import "./App.css";
import TableRow from "./Landing Page/tableRows";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightSquare } from "react-icons/bs";
import LandingPage from "./Landing Page/LandingPage";
import LabWork from "./Labs";
import Kanbas from "./Kanbas";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          {/* Default route to landing page */}
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/" element={<Navigate to="/Labs" replace={true} />} />

          {/* Route for LabWork */}
          <Route path="/Labs/*" element={<LabWork />} />

          {/* Route for Kanbas */}
          <Route path="/kanbas/*" element={<Kanbas />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
