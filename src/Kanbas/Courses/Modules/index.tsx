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
      <br /><br /><br /><br />

      <ul id="modules-list" className="list-group rounded-0">
        {filteredModules.map(module => (
          <li
            key={module._id}
            className="module-item list-group-item p-0 mb-5 fs-5 border-gray"
          >
            <div className="module-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="icon me-2 fs-3" />
              {module.name}
            </div>
            {module.lessons && (
              <ul className="lessons-list list-group rounded-0">
                {module.lessons.map(lesson => (
                  <li
                    key={lesson._id}
                    className="lesson-item list-group-item p-3 ps-1"
                  >
                    <BsGripVertical className="icon me-2 fs-3" />
                    {lesson.name}
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
