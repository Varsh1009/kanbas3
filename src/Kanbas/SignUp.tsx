import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div id="wd-signup-screen" className="d-flex justify-content-center mt-5">
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <h3>Sign up</h3>
          <input placeholder="username" className="form-control mb-2" />
          <br />
          <input
            placeholder="password"
            type="password"
            className="form-control mb-2"
          />
          <br />
          <input
            placeholder="verify password"
            type="password"
            className="form-control mb-2"
          />
          <br />
          <Link
            id="wd-signup-link"
            className="btn btn-primary w-100 p-2"
            to="../SignUp"
          >
            Sign up
          </Link>
          <br />
          <br />
          <Link
            id="wd-signin-btn"
            className="btn btn-secondary w-100 p-2"
            to="../SignIn"
          >
            Sign in
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
}
