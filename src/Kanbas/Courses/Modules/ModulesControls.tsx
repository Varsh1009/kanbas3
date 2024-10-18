import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="d-flex align-items-center justify-content-between">
      <div className="d-flex">
        <button
          id="wd-add-module-btn"
          className="btn btn-lg btn-danger me-2"
          aria-label="Add Module"
        >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Module
        </button>

        <div className="dropdown me-2">
          <button
            id="wd-publish-all-btn"
            className="btn btn-lg btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <GreenCheckmark />
            Publish All
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                id="wd-publish-all-modules-and-items-btn"
                className="dropdown-item"
              >
                <GreenCheckmark />
                Publish all modules and items
              </a>
            </li>
            <li>
              <a
                id="wd-publish-modules-only-button"
                className="dropdown-item"
              >
                <GreenCheckmark />
                Publish modules only
              </a>
            </li>
            <li>
              <a
                id="wd-unpublish-all-modules-and-items"
                className="dropdown-item"
              >
                Unpublish all modules and items
              </a>
            </li>
            <li>
              <a
                id="wd-unpublish-modules-only"
                className="dropdown-item"
              >
                Unpublish modules only
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="d-flex">
        <button
          id="wd-view-progress"
          className="btn btn-lg btn-secondary me-2"
          aria-label="View Progress"
        >
          View Progress
        </button>
        <button
          id="wd-collapse-all"
          className="btn btn-lg btn-secondary"
          aria-label="Collapse All"
        >
          Collapse All
        </button>
      </div>
    </div>
  );
}
