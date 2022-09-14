import "./Footer.scss";
import React from "react";
import home from "../../assets/icons/icon _home alt_.svg";
import bag from "../../assets/icons/Group 13.svg";
import search from "../../assets/icons/icon _Search_.svg";
import user from "../../assets/icons/Group 12.svg";
import shop from "../../assets/icons/icon _notes_.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__home">
                <img src={home} alt="home icon" />
                <p>Home</p>
            </div>
            <div className="footer__shop">
                <img src={shop} alt="shop icon" />
                <p>Shop</p>
            </div>
            <div className="footer__search">
                <img src={search} alt="search icon" />
                <p>Shop</p>
            </div>
            <div className="footer__account">
                <img src={user} alt="user icon" />
                <p>Account</p>
            </div>
            <div className="footer__bag">
                <img src={bag} alt="bag icon" />
                <p>Bag</p>
            </div>
        </div>
    );
};

export default Footer;
