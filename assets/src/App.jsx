import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import { Button, Carousel } from "react-bootstrap";
import heels from "./images/black_heels.webp";
import stretchShoes from "./images/close-up-woman-stretching-her-hand-leg-sitting-exercise-mat.jpg";
import sports from "./images/sun-kissed-sports-shoes-rest-tranquil-pier-generated-by-ai.jpg"
import Shoes from "./Shoes";

export default function App() {
  const userId = localStorage.getItem("userId");
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <Router>
      <div>
        <nav style={{ backgroundColor: 'black' }}>
          {userId ? (
            <>
              <Link to='/shoes' style={{ color: 'white', padding: '15px' }} >Shoes</Link>
              <Button variant='dark'>Log Out</Button>
            </>
          ) : (
            <>
              <Button variant='dark' onClick={() => setShowLogInModal(true)}>Login</Button>
              <Button variant='dark' onClick={() => setShowSignUpModal(true)}>Sign up</Button>
            </>
          )}
        </nav>
        <LogIn show={showLogInModal} handleClose={() => setShowLogInModal(false)} />
        <SignUp show={showSignUpModal} handleClose={() => setShowSignUpModal(false)} />
        <Routes>
          <Route path="/shoes" element={<Shoes/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
        <footer style={{ backgroundColor: 'black', position: 'fixed', width: '100%', bottom: '0', height: '100px', color: 'white', textAlign: 'center' }} >Foot Wearhouse</footer>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sports}
          alt="Sport Shoes"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={stretchShoes}
          alt="Woman Stretching"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={heels}
          alt="Heels"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>
  )
}