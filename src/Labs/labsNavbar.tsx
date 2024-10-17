import { Link } from "react-router-dom";

const LabsNavbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">
                <Link to="./">Lab1</Link> 
            </div> */}
      <ul className="navbar-links">
        <li>
          <Link to="Lab1">
            <h2>Lab 1</h2>
          </Link>
        </li>
        <li>
          <Link to="Lab2">
            <h2>Lab 2</h2>
          </Link>
        </li>
        <li>
          <Link to="Lab3">
            <h2>Lab 3</h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LabsNavbar;
