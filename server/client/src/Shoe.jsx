import React from 'react';

const Shoe = ({ shoe }) => {
    return (
        <div>
            <h1>{shoe.name}</h1>
            <p>{shoe.description}</p>
            <p>This is for a listing for a size {shoe.size} shoe and it is priced at {shoe.price}.</p>
        </div>
    )
};

export default Shoe;
