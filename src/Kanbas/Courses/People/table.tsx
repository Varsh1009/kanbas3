import { FaUserCircle } from "react-icons/fa";
import { people } from "../../Database";
import { useParams } from "react-router";

export default function PeopleTable() {
  const { cid } = useParams();
  // const enrollmentData = people;
  const enrollmentData = people.filter(
    (enrollment) => enrollment.course === cid
  );
  console.log(enrollmentData);
  return (
    <div id="wd-people-table">
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
          {enrollmentData.map((enrollment) => (
            <tr key={enrollment._id}>
              <td className="wd-user text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-user-id">{enrollment.user}</span>
              </td>
              <td className="wd-enrollment-id">{enrollment._id}</td>
              <td className="wd-course">{enrollment.course}</td>
              <td className="wd-role">{enrollment.role}</td>
              <td className="wd-last-activity">{enrollment.lastActivity}</td>
              <td className="wd-total-activity">{enrollment.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <table className="table table-striped">
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
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Bruce</span>{" "}
              <span className="wd-last-name">Wayne</span>
            </td>
            <td className="wd-login-id">001234562S</td>
            <td className="wd-section">S102</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-02</td>
            <td className="wd-total-activity">12:15:42</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Steve</span>{" "}
              <span className="wd-last-name">Rogers</span>
            </td>
            <td className="wd-login-id">001234563S</td>
            <td className="wd-section">S103</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-03</td>
            <td className="wd-total-activity">08:12:50</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Natasha</span>{" "}
              <span className="wd-last-name">Romanoff</span>
            </td>
            <td className="wd-login-id">001234564S</td>
            <td className="wd-section">S104</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-04</td>
            <td className="wd-total-activity">14:05:21</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Peter</span>{" "}
              <span className="wd-last-name">Parker</span>
            </td>
            <td className="wd-login-id">001234565S</td>
            <td className="wd-section">S105</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-05</td>
            <td className="wd-total-activity">09:33:17</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Clark</span>{" "}
              <span className="wd-last-name">Kent</span>
            </td>
            <td className="wd-login-id">001234566S</td>
            <td className="wd-section">S106</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-06</td>
            <td className="wd-total-activity">11:45:38</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Diana</span>{" "}
              <span className="wd-last-name">Prince</span>
            </td>
            <td className="wd-login-id">001234567S</td>
            <td className="wd-section">S107</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-07</td>
            <td className="wd-total-activity">13:10:25</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Wanda</span>{" "}
              <span className="wd-last-name">Maximoff</span>
            </td>
            <td className="wd-login-id">001234568S</td>
            <td className="wd-section">S108</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-08</td>
            <td className="wd-total-activity">10:50:48</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Bruce</span>{" "}
              <span className="wd-last-name">Banner</span>
            </td>
            <td className="wd-login-id">001234569S</td>
            <td className="wd-section">S109</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-09</td>
            <td className="wd-total-activity">12:22:37</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Thor</span>{" "}
              <span className="wd-last-name">Odinson</span>
            </td>
            <td className="wd-login-id">001234570S</td>
            <td className="wd-section">S110</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-10</td>
            <td className="wd-total-activity">07:55:29</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}
