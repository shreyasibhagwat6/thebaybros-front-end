import "./Home.scss";
import React, { useState, useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import axios from "axios";
import { PRODUCTS_API } from "../../Utilities/api_links";
import Header from "../../components/Header/Header";
import { carouselImages } from "../../Utilities/carouselImages";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        await axios
            .get(PRODUCTS_API)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (!products) return null;

    return (
        <div className="home">
            <Header />
            <div className="home__carousel">
                {carouselImages.map((image, index) => {
                    return (
                        <img
                            key={index}
                            className="home__image"
                            src={image.image}
                            alt="clothing categories"
                        />
                    );
                })}
            </div>
            <div className="home__cards">
                {products.map((product) => {
                    return (
                        <Cards
                            key={product.id}
                            image={product.product_image}
                            brand={product.product_brand}
                            name={product.product_name}
                            price={product.price}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
