import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlsButton";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function CourseModules() {
  const { cid } = useParams();
  const filteredModules = db.modules.filter(module => module.course === cid);

  return (
    <div>
      <ModulesControls />
      <br /><br />

      <ul id="modules-list" className="list-group">
        {filteredModules.map(module => (
          <li
            key={module._id}
            className="module-item list-group-item mb-4 border border-gray rounded-0"
          >
            <div className="module-title d-flex align-items-center bg-secondary text-white p-3">
              <BsGripVertical className="icon me-2 fs-3" />
              <span>{module.name}</span>
            </div>
            {module.lessons && (
              <ul className="lessons-list list-group">
                {module.lessons.map(lesson => (
                  <li
                    key={lesson._id}
                    className="lesson-item list-group-item d-flex align-items-center p-3"
                  >
                    <BsGripVertical className="icon me-2 fs-3" />
                    <span className="flex-grow-1">{lesson.name}</span>
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
