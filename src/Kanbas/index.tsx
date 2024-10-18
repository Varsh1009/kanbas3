import { Routes, Route, Navigate } from "react-router-dom";
import Accounts from "./Accounts";
import Dashboard from "./Dashboard";
import Courses from "./Courses/index";
import AccountNavigation from "./Navigation";
import "./index.css";

const Kanbas = () => {
  return (
    <div id="wd-kanbas" className="kanbas">
      <div>
        <table>
          <tbody>
            <AccountNavigation />
            <div className="wd-main-content-offset p-3">
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="Dashboard" replace />}
                />
                <Route path="Accounts/*" element={<Accounts />} />
                <Route path="Dashboard/*" element={<Dashboard />} />
                <Route path="Courses/:cid/*" element={<Courses />} />
                <Route path="Calendar" element={<h1>Calendar</h1>} />
                <Route path="Inbox" element={<h1>Inbox</h1>} />
              </Routes>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Kanbas;
