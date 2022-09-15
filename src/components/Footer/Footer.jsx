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
                <img className="footer__icon" src={home} alt="home icon" />
                <p className="footer__text">Home</p>
            </div>
            <div className="footer__shop">
                <img className="footer__icon" src={shop} alt="shop icon" />
                <p className="footer__text">Shop</p>
            </div>
            <div className="footer__search">
                <img
                    className="footer__icon footer__search"
                    src={search}
                    alt="search icon"
                />
                <p className="footer__text">Search</p>
            </div>
            <div className="footer__account">
                <img
                    className="footer__icon footer__user"
                    src={user}
                    alt="user icon"
                />
                <p className="footer__text">Account</p>
            </div>
            <div className="footer__bag">
                <img
                    className="footer__icon footer__bag"
                    src={bag}
                    alt="bag icon"
                />
                <p className="footer__text">Bag</p>
            </div>
        </div>
    );
};

export default Footer;
