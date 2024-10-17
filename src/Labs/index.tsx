import "./labs.css";
import HeadingsAndParagraphs from "./Lab 1/headingsandpara";
import Lists from "./Lab 1/lists";
import Forms from "./Lab 1/forms";
import Navbar from "./Lab 1/navbar";
import Table from "./Lab 1/tables";
import Images from "./Lab 1/images";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import LabsNavbar from "./labsNavbar";
import Lab1 from "./Lab 1";
import Lab2 from "./Lab 2";
import Lab3 from "./Lab 3";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const LabWork = () => {
  return (
    <div className="lab-work">
      <div className="landing-page">
        <div className="row">
          <div className="col" />
          <div className="col-6">
            <div className="headings-card">
              <h1>Shrivarshini Narayanan</h1>
              <h2>CS5610 - 20596</h2>
            </div>
          </div>
          <div className="col" />
        </div>
        <div className="button-container">
          <a href="https://github.com/Varsh1009">
            <button className="button">
              {" "}
              Source Code Repository <FaGithub />
            </button>
          </a>

          <Link to="/kanbas">
            <button className="button">
              Go to Kanbas <BsArrowUpRightSquare />
            </button>
          </Link>
        </div>
      </div>

      {/* <div className="top-buttons">
        <Link to="/" className="back-button">
          Back to Landing Page
        </Link>
        <div></div>
        <Link to="../kanbas" className="kanbas-button">
          Go to Kanbas
        </Link>
      </div> */}

      {/* <h1>Lab Work</h1> */}
      {/* <div className="headings">
        <h1>Shrivarshini Narayanan</h1>
        <h4>CS5610 - 20596</h4>
      </div> */}
      {/* <h2>Lab 1</h2> */}

      <br />

      <LabsNavbar />

      <Routes>
        <Route
          path="/"
          // element={<h3>Use the above navbar to view different components.</h3>}
          element={<Navigate to="Lab1" replace={true} />}
        />
        <Route path="Lab1/*" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
      </Routes>

      {/* <Routes>
                <Route path="/" element={<h3>Use the above navbar to view different components.</h3>} />
                <Route path="headingsandpara" element={<HeadingsAndParagraphs />} />
                <Route path="lists" element={<Lists />} />
                <Route path="tables" element={<Table />} />
                <Route path="forms" element={<Forms />} />
                <Route path="images" element={<Images />} />
            </Routes> */}
    </div>
  );
};

export default LabWork;
