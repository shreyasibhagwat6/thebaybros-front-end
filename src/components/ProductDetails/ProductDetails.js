import React, { useParams, useState, useEffect } from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import axios from 'axios';


const ProductDetails = () => {

    const [product, setProduct] = useState('');
    const slides = [
        { url: "http://localhost:8080/image/jeans_pants1.jpg", title: "beach" },
        { url: "http://localhost:8080/image/jeans_pants2.jpg", title: "boat" },
    ]

    useEffect(()=>{
        axios
            .get('http://localhost:8080/details/1')
            .then(response => {
                console.log(response);
                setProduct(response.data[0])
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
      };

    return (
        <div>
             <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
            <div>
                <h3>{product.product_brand}</h3>
                <p>{product.product_name}</p>
                <h4>${product.price}</h4>
            </div>
            <div>
                <p>Size</p>
                <div>
                    <div>4</div>
                    <div>6</div>
                </div>
            </div>
            <div>
                <p>Shipping and Pickup</p>
            </div>
            <div>
                {product.product_details}
            </div>
            <p>Style Code: {product.product_code}</p>
        </div>
    )
};

export default ProductDetails;