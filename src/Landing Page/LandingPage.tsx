import "./LandingPage.css";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
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
        <a href="https://github.com/Varsh1009" className="button-link" target="_blank" rel="noopener noreferrer">
          <button className="button">
            Source Code Repository <FaGithub />
          </button>
        </a>
        <Link to="/kanbas" className="button-link">
          <button className="button">
            Go to Kanbas <BsArrowUpRightSquare />
          </button>
        </Link>
        <Link to="/labwork" className="button-link">
          <button className="button">
            Go to Labs <BsArrowUpRightSquare />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
