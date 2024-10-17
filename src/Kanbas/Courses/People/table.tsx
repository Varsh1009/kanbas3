import { FaUserCircle } from "react-icons/fa";
import { people } from "../../Database";
import { useParams } from "react-router";

export default function PeopleTable() {
  const { cid } = useParams();
  const filteredData = people.filter(person => person.course === cid);
  console.log(filteredData);
  
  return (
    <div id="people-table-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(person => (
            <tr key={person._id}>
              <td className="user-name text-nowrap">
                <FaUserCircle className="icon me-2 fs-1 text-secondary" />
                <span className="user-id">{person.user}</span>
              </td>
              <td className="enrollment-id">{person._id}</td>
              <td className="course-section">{person.course}</td>
              <td className="user-role">{person.role}</td>
              <td className="last-activity">{person.lastActivity}</td>
              <td className="total-activity">{person.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
