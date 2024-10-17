import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div id="wd-signin-screen" className="d-flex justify-content-center mt-5">
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <h3>Sign in</h3>
          <input
            id="wd-username"
            placeholder="username"
            className="form-control mb-2"
          />
          <input
            id="wd-password"
            placeholder="password"
            type="password"
            className="form-control mb-2"
          />
          <br />
          <Link
            id="wd-signin-btn"
            className="btn btn-primary w-100 p-2"
            to="../Profile"
          >
            Sign in
          </Link>
          <br />
          <br />
          <Link
            id="wd-signup-link"
            className="btn btn-secondary w-100 p-2"
            to="../SignUp"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
