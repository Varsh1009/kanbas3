import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen" className="d-flex justify-content-center">
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <h2>Profile</h2>
          <input
            id="wd-username"
            value="alice"
            placeholder="username"
            className="form-control mb-2"
          />
          <br />
          <input
            id="wd-password"
            value="123"
            placeholder="password"
            type="password"
            className="form-control mb-2"
          />
          <br />
          <input
            id="wd-firstname"
            value="Alice"
            placeholder="First Name"
            className="form-control mb-2"
          />
          <br />
          <input
            id="wd-lastname"
            value="Wonderland"
            placeholder="Last Name"
            className="form-control mb-2"
          />
          <br />
          <input
            id="wd-dob"
            value="2000-01-01"
            type="date"
            className="form-control mb-2"
          />
          <br />
          <input
            id="wd-email"
            value="alice@wonderland"
            type="email"
            className="form-control mb-2"
          />
          <br />
          <select id="wd-role" className="form-control mb-2">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <br />
          <Link className="btn btn-danger w-100 p-2" to="../SignIn">
            Sign out
          </Link>
        </div>
      </div>
    </div>
  );
}
