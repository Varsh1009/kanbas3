import { BsGripVertical } from "react-icons/bs";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlsButton";
import { IoAdd, IoEllipsisVertical } from "react-icons/io5";
import { MdEditDocument } from "react-icons/md";
import * as db from "../../Database";
import { Link, useParams } from "react-router-dom";

export default function AssignmentList() {
  const { cid } = useParams();
  const filteredAssignments = db.assignments.filter(
    (assignment) => assignment.course === cid
  );

  return (
    <div id="wd-assignments" className="container">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <form className="form-inline">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <FaSearch className="fs-5" />
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search Assignments"
              aria-label="Search"
            />
          </div>
        </form>

        <div>
          <button className="btn btn-secondary me-2">+ Group</button>
          <button className="btn btn-danger">+ Assignment</button>
        </div>
      </div>

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 border-grey">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <h2 className="mb-0 me-3 text-white">Assignments</h2>
            <h3
              className="border border-dark rounded-pill px-3 py-1 mb-0"
              style={{ maxWidth: 190 }}
            >
              40% of total
            </h3>
            <IoAdd className="me-2 fs-3 text-white" />
            <IoEllipsisVertical className="fs-3 text-white" />
          </div>

          <ul className="wd-lessons list-group rounded-0">
            {filteredAssignments.map((assignment) => (
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
                      <div className="text-danger">
                        {assignment.module}
                        <span className="text-muted">
                          {" "}
                          | <strong>Not Available Until </strong>
                          {assignment.availableDate} |
                        </span>
                      </div>
                      <div className="small text-muted mt-1">
                        <strong>Due Date: </strong>
                        {assignment.dueDate}
                      </div>
                    </div>
                    <LessonControlButtons />
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
