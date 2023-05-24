import React from "react";
import { Button, Modal } from "react-bootstrap";

const SignUp = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
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
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default SignUp;