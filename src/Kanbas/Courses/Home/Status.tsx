import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoNotificationsCircle } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { CiViewTimeline } from "react-icons/ci";
import { SiSimpleanalytics } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { TfiAnnouncement } from "react-icons/tfi";

export default function CourseManagement() {
  return (
    <div
      id="course-management"
      style={{
        width: "320px",
      }}
    >
      <h2>Course Management</h2>

      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish
          </button>
        </div>
      </div>

      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Content
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Library
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoMdHome className="me-2 fs-5" /> Select Home Page
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoSettings className="me-2 fs-5" /> Manage Course Settings
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <TfiAnnouncement className="me-2 fs-5" /> Create Announcement
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <SiSimpleanalytics className="me-2 fs-5" /> Access Analytics
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoNotificationsCircle className="me-2 fs-5" /> View Notifications
      </button>
    </div>
  );
}
