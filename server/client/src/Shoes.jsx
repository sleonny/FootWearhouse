import React, { useEffect, useState } from 'react';
import Shoe from './Shoe';
import { Button, Modal } from 'react-bootstrap';

const initialFormData = {
    name: '',
    description: '',
    size: 0,
    price: 0
};

const Shoes = () => {
    const userId = localStorage.getItem("userId");
    const [shoes, setShoes] = useState([]);
    const [creatingShoe, setCreatingShoe] = useState(false);
    const [formData, setFormData] = useState({...initialFormData, user_id: userId});
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('/api/shoe', {
            method: 'GET'
        })
        .then(resp => resp.json())
        .then(data => setShoes(data))
        .catch(err => console.log(err))
    }, []);

    const handleChange = e => {
        return setFormData(currentFormData => ({
            ...currentFormData,
            [e.target.name]: e.target.value
        }))
    };

    const handleCreate = async () => {
        return fetch('/api/shoe', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(async resp => {
            if (resp.status === 201) {
                const response = await resp.json();
                setShoes([response, ...shoes]);
                setCreatingShoe(false);
            } else {
                const response = await resp.json();
                setError(response.error);
            }
        })
        .catch(err => console.log(err))
    };
    
    return (
        <div>
            <h1>Shoes</h1>
            <Button className='m-1' onClick={() => setCreatingShoe(true)}>Create Shoe</Button>
            {shoes.map(shoe => {
                return <Shoe key={shoe.id} shoe={shoe} />
            })}
            <Modal show={creatingShoe} onHide={() => setCreatingShoe(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Create New Shoe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <input className='mt-3' onChange={handleChange} type='text' name='name' placeholder="Enter your shoe's name" /><br />
                        <textarea className='mt-3' onChange={handleChange} name='description' placeholder="Enter your shoe's description" cols='40' rows='3' /><br />
                        <input className='mt-3' onChange={handleChange} type='text' name='size' placeholder="Enter your shoe's size" /><br />
                        $<input className='mt-3' onChange={handleChange} type='text' name='price' placeholder="Enter your shoe's price" />
                    </form>
                    {error}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => setCreatingShoe(false) }>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCreate}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

export default Shoes;