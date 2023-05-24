import React, { useEffect, useState } from 'react';
import Shoe from './Shoe';

const Shoes = () => {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");

        fetch('/shoes', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
              }
        })
        .then(resp => resp.json())
        .then(data => setShoes(data))
        .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <h1>Shoes</h1>
            {shoes.map(shoe => {
                return <Shoe shoe={shoe} />
            })}
        </div>
    )
};

export default Shoes;