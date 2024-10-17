import Modules from "../Modules/index";
import CourseStatus from "./Status";

export default function Dashboard() {
  return (
    <div className="row">
      <div className="col-12 col-md-8">
        <Modules />
      </div>
      <div className="col-12 col-md-4">
        <CourseStatus />
      </div>
    </div>
  );
}
