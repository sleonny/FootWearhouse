import React from "react";

const FieldComponent = ({ title }) => {
    return (
        <div>
            <h1 className="blue">{title}</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
        </div>
    )
};

export default FieldComponent;