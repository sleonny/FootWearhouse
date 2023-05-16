import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign up</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/" element={<LogIn/>} />
        </Routes>
      </div>
    </Router>
  );
}
