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
      <div className="header-section">
        <h1>Shrivarshini Narayanan</h1>
        <h2>CS5610 - 20596</h2>
      </div>
      
      <LabsNavbar />

      <div className="button-container">
        <a href="https://github.com/Varsh1009">
          <button className="button">
            Source Code Repository <FaGithub />
          </button>
        </a>

        <Link to="/kanbas">
          <button className="button">
            Go to Kanbas <BsArrowUpRightSquare />
          </button>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="Lab1" replace={true} />} />
        <Route path="Lab1/*" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
      </Routes>

      <table className="lab-table">
        <thead>
          <tr>
            <th>Lab Number</th>
            <th>Description</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lab 1</td>
            <td>Headings and Paragraphs</td>
            <td><a href="/Lab1">View</a></td>
          </tr>
          <tr>
            <td>Lab 2</td>
            <td>Working with Lists</td>
            <td><a href="/Lab2">View</a></td>
          </tr>
          <tr>
            <td>Lab 3</td>
            <td>Creating Forms</td>
            <td><a href="/Lab3">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LabWork;
