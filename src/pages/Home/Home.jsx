import "./Home.scss";
import React, { useState, useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import axios from "axios";
import { PRODUCTS_API } from "../../Utilities/api_links";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        await axios
            .get(PRODUCTS_API)
            .then((res) => {
                // console.log(res.data);
                setProducts(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (!products) return null;

    return (
        <div className="home">
            <h4 className="home__heading">Women's Pants & Leggings</h4>
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
    );
};

export default Home;
