import React from "react";

const Item1 = (props) => {
    return (
        <li className="Item1-container">
            <p className="text"> {props.text} </p>;
        </li>
    );
};

export default Item1;