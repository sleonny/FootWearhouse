import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const LogIn = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type="text" placeholder="username" className="m-3" />
                <br />
                <input type="password" placeholder="password" className="m-3" />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Link to="/shoes" onClick={handleClose} >Enter</Link>
            </Modal.Footer>
        </Modal>
    )
};

export default LogIn;
