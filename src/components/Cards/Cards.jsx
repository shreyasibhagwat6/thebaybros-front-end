import "./Cards.scss";
import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
    return (
        <Link className="cards__link" to="/details"> 
        <div className="cards">
            <div className="cards__card">
                <img
                    className="cards__image"
                    src={props.image}
                    alt={props.name}
                />
                <p className="cards__brand">{props.brand}</p>
                <p className="cards__name">{props.name}</p>
                <p className="cards__price">${props.price}</p>
            </div>
        </div>
        </Link>
    );
};

export default Cards;
