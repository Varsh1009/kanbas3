import "./LandingPage.css";
import { FaGithub } from "react-icons/fa";
import TableRow from "./tableRows";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import LabWork from "../Labs";
import landingImage from '../../assets/landing-image.jpg'; // Adjust the path as necessary

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="header-section">
        <h1>Shrivarshini Narayanan</h1>
        <h2>CS5610 - 20596</h2>
      </div>
      
      <img src={landingImage} alt="Landing" className="landing-image" />

      <div className="action-buttons">
        <a href="https://github.com/Varsh1009" className="button-link">
          <button className="button">
            Source Code Repository <FaGithub />
          </button>
        </a>
        <Link to="/" className="button-link">
          <button className="button">
            Go to Landing Page <BsArrowUpRightSquare />
          </button>
        </Link>
        <Link to="/labwork/*" className="button-link">
          <button className="button">
            Go to Lab Work <BsArrowUpRightSquare />
          </button>
        </Link>
        <Link to="/kanbas" className="button-link">
          <button className="button">
            Go to Kanbas <BsArrowUpRightSquare />
          </button>
        </Link>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Description</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            name="A1"
            description="Created a landing page for CS5610 that will contain the hyperlinks to all the following assignments as well as implemented the lab work."
            url="https://kanbas1.netlify.app/"
          />
          <TableRow
            name="A2"
            description="Gained familiarity with different concepts of CSS and Bootstrap through lab work."
            url="https://flourishing-bombolone-8dd3ab.netlify.app/"
          />
          <TableRow 
            name="A3" 
            description="Gained familiarity with JavaScript concepts."
            url="https://remarkable-heliotrope-53f3e0.netlify.app/" 
          />
          <TableRow name="A4" description="To be Updated" url="#" />
          <TableRow name="A5" description="To be Updated" url="#" />
          <TableRow name="A6" description="To be updated" url="#" />
        </tbody>
      </table>
    </div>
  );
};

export default LandingPage;
