import "./Header.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useState } from "react";
import StyledSlider from "../StyledSlider/StyledSlider";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

const Header = () => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [full, setFull] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const sizes = ["24", "25", "26", "27", "28", "29"];
    const fits = ["Petite", "True to Size", "Larger"];
    const materials = [
        "Cotton",
        "Denim",
        "Linen",
        "Leather",
        "Polyester",
        "Nylon",
        "Satin",
        "Silk",
    ];
    const brands = [
        "BWLDR",
        "Citizens of Humanity",
        "Claudel",
        "DKNY",
        "GANNI",
        "Free People",
        "ICHI",
    ];

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    function handleShowModal(breakpoint) {
        setFull(breakpoint);
        setShowModal(true);
    }

    return (
        <>
            <Modal
                show={show}
                fullscreen={fullscreen}
                onHide={() => setShow(false)}
                animation={false}
            >
                <Modal.Header
                    style={{
                        borderBottom: "1px solid #686868",
                    }}
                    closeButton
                >
                    <Modal.Title>FILTER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="header__modal-price-div">
                        <p className="header__modal-heading">Price Range</p>
                        <div className="header__modal-price">
                            <p>$5</p>
                            <p>Unlimited</p>
                        </div>
                        <StyledSlider />
                    </div>
                    <div className="header__modal-colors">
                        <p className="header__modal-heading header__modal-heading-color">
                            Colours
                        </p>
                        <div className="header__colors">
                            {sizes.map((size, index) => {
                                return (
                                    <div
                                        className={`header__colorBorder-${index}`}
                                    >
                                        <div
                                            className={`header__color-${index} header__color`}
                                            key={size}
                                        ></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="header__modal-sizes">
                        <p className="header__modal-heading">Sizes</p>
                        <div className="header__sizes">
                            {sizes.map((size, index) => {
                                return (
                                    <p
                                        className={`header__size-${index} header__size`}
                                        key={size}
                                    >
                                        {size}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                    <div className="header__modal-fit">
                        <p className="header__modal-heading">Preferred Fit</p>
                        <div className="header__fits">
                            {fits.map((fit, index) => {
                                return (
                                    <p
                                        className={`header__fit-${index} header__fit`}
                                        key={fit}
                                    >
                                        {fit}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                    <div className="header__modal-materials">
                        <p className="header__modal-heading">Material</p>
                        <div className="header__materials">
                            {materials.map((material, index) => {
                                return (
                                    <p
                                        className={`header__material-${index} header__material`}
                                        key={material}
                                    >
                                        {material}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                    <div className="header__modal-brands">
                        <p className="header__modal-heading">Brands</p>
                        <div className="header__brands">
                            {brands.map((brand, index) => {
                                return (
                                    <p
                                        className={`header__brand-${index} header__brand`}
                                        key={brand}
                                    >
                                        {brand}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                    <Button
                        variant="dark"
                        size="lg"
                        style={{
                            width: "90%",
                            marginBottom: "2rem",
                            marginLeft: "1.3rem",
                            marginTop: "1.7rem",
                        }}
                    >
                        SHOW ITEMS (103)
                    </Button>
                </Modal.Body>
            </Modal>
            <Modal
                show={showModal}
                fullscreen={full}
                onHide={() => setShowModal(false)}
                animation={false}
            >
                <Modal.Header
                    style={{
                        borderBottom: "1px solid #686868",
                    }}
                    closeButton
                >
                    <Modal.Title>SORT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="header__modal-sort">
                        <div className="header__sort-flex">
                            <label htmlFor="sortFeature">Sort by Feature</label>
                            <input
                                className="header__radiobtn"
                                type="radio"
                                name="sortItem"
                            />
                        </div>
                        <div className="header__sort-flex">
                            <label htmlFor="sortSeller">
                                Sort by Best Sellers
                            </label>
                            <input
                                className="header__radiobtn"
                                type="radio"
                                name="sortItem"
                            />
                        </div>
                        <div className="header__sort-flex">
                            <label htmlFor="sortNew">Sort by Newest</label>
                            <input
                                className="header__radiobtn"
                                type="radio"
                                name="sortItem"
                            />
                        </div>
                        <div className="header__sort-flex">
                            <label htmlFor="sortPriceHighLow">
                                Sort by Price High to Low
                            </label>
                            <input
                                className="header__radiobtn"
                                type="radio"
                                name="sortItem"
                            />
                        </div>
                        <div className="header__sort-flex">
                            <label htmlFor="sortPriceLowHigh">
                                Sort by Price Low to High
                            </label>
                            <input
                                className="header__radiobtn"
                                type="radio"
                                name="sortItem"
                            />
                        </div>
                        <div className="header__sort-flex">
                            <label htmlFor="sortRated">Sort by Top Rated</label>
                            <input
                                className="header__radiobtn"
                                type="radio"
                                name="sortItem"
                            />
                        </div>
                        <div className="header__sort-flex">
                            <label htmlFor="sortFeature">Sort by Brand</label>
                            <input
                                className="header__radiobtn"
                                type="radio"
                                name="sortItem"
                            />
                        </div>
                        <Button
                            variant="dark"
                            size="lg"
                            style={{
                                width: "90%",
                                marginBottom: "2rem",
                                marginLeft: "1.3rem",
                                marginTop: "1rem",
                            }}
                        >
                            SORT MY ITEMS
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
            <div className="header">
                <div className="header__title">
                    <IoIosArrowBack
                        style={{ color: "black" }}
                        fontSize="25px"
                    />
                    <h5 className="header__heading">
                        WOMEN'S PANTS & LEGGINGS
                    </h5>
                </div>
                <div className="header__info">
                    <p className="header__items">2,704 Items</p>
                    <div className="header__buttons">
                        <button className="header__filter" onClick={handleShow}>
                            Filter
                        </button>
                        <button
                            className="header__sort"
                            onClick={handleShowModal}
                        >
                            Sort
                        </button>
                    </div>
                </div>
                <div className="header__black-bar">
                    <IoIosArrowBack
                        style={{ color: "white" }}
                        fontSize="30px"
                    />
                    <p className="header__text">
                        Sign up for HB Mastercard & get up to 15% off first day
                        purchases
                    </p>
                    <IoIosArrowForward
                        style={{ color: "white" }}
                        fontSize="30px"
                    />
                </div>
            </div>
        </>
    );
};

export default Header;
