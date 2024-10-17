import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="SignIn" className="list-group-item active border border-0">
        SignIn
      </Link>
      <Link to="SignUp" className="list-group-item text-danger border border-0">
        SignUp
      </Link>
      <Link
        to="Profile"
        className="list-group-item text-danger border border-0"
      >
        Profile
      </Link>
    </div>
  );
}
