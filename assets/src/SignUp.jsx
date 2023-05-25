import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const initialFormData = {
    email: "",
    password: ""
}

const SignUp = ({ show, handleClose }) => {
    const [formData, setFormData] = useState(initialFormData);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = e => {
        return setFormData(currentFormData => ({
            ...currentFormData,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async () => {
        return fetch("/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(formData),
        })
        .then(async resp => {
            if (resp.status === 201) {
                localStorage.setItem("userId", resp.user.id);
                navigate("/shoes");
            } else {
                setError("Internal Server Error");
            }
        })
        .catch(err => console.log(err))
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type="text" placeholder="username" className="m-3" onChange={handleChange} />
                <br />
                <input type="password" placeholder="password" className="m-3" onChange={handleChange} />
                <span className="text-danger">{error}</span>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
                Sign Up and Log In
            </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default SignUp;