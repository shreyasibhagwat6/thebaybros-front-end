import "./Cards.scss";
import React from "react";

const Cards = (props) => {
    return (
        <div className="cards">
            <div className="cards__card">
                <img src={props.image} alt={props.name} />
                <p className="cards__brand">{props.brand}</p>
                <p className="cards__name">{props.name}</p>
                <p className="cards__price">$ {props.price}</p>
            </div>
        </div>
    );
};

export default Cards;
