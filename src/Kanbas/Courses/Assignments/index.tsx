import { BsGripVertical } from "react-icons/bs";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlsButton";
import { IoAdd, IoEllipsisVertical } from "react-icons/io5";
import { IoMdBookmarks } from "react-icons/io";
import { MdEditDocument } from "react-icons/md";
import * as db from "../../Database";
import { Link, useParams } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === cid
  );
  return (
    <div id="wd-assignments">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex justify-content-center">
          <form className="form-inline">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <FaSearch className="fs-5" />
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search for Assignments"
                aria-label="Search"
              />
            </div>
          </form>
        </div>

        <div>
          <button
            id="wd-add-assignment-group"
            className="btn btn-secondary me-2"
          >
            + Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            + Assignment
          </button>
        </div>
      </div>

      <br />

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-grey">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />

            <h2 className="mb-0 me-3">Assignments</h2>

            <h3
              className="border border-dark rounded-pill px-3 py-1 mb-0 w-50"
              style={{ maxWidth: 190 }}
            >
              40% of total
            </h3>

            <IoAdd className="me-2 fs-3" />
            <IoEllipsisVertical className="me-2 fs-3" />
          </div>

          <ul className="wd-lessons list-group rounded-0">
            {assignments.map((assignment) => (
              <Link
                key={assignment._id}
                className="wd-assignment-link text-decoration-none"
                to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
              >
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdEditDocument className="me-2 fs-3 text-success" />
                    <div className="flex-grow-1">
                      <div className="fw-bold text-dark">
                        {assignment.title}
                      </div>
                      <div className="medium text-danger">
                        {assignment.module}
                        <span className="text-muted">
                          {" "}
                          | <strong>Not Available Until </strong>{" "}
                          {assignment.availableDate} |
                        </span>
                      </div>
                      <div className="small text-muted mt-1"></div>
                      <div className="small text-muted mt-1">
                        <strong>Due Date: </strong>
                        {assignment.dueDate}
                      </div>
                    </div>{" "}
                    <LessonControlButtons />
                  </div>
                </li>
                {/* </a> */}
              </Link>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
