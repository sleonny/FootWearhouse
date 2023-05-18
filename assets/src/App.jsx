import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import { Button } from "react-bootstrap";

export default function App() {
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <Router>
      <div>
        <nav>
          {/* <Link to="/">Login</Link> */}
          <Button onClick={() => setShowLogInModal(true)}>Login</Button>
          <Button onClick={() => setShowSignUpModal(true)}>Sign up</Button>
        </nav>
        <LogIn show={showLogInModal} handleClose={() => setShowLogInModal(false)} />
        <SignUp show={showSignUpModal} handleClose={() => setShowSignUpModal(false)} />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <footer>Add Footer Here</footer>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      Add Carousel Here
    </div>
  )
}