import React, { useParams, useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetails = () => {

    const [product, setProduct] = useState('');
    // const { productId } = useParams();


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

    console.log(product)

    return(
        <div>
            <div>
                <img src={'http://localhost:8080/image/jeans_pants1.jpg'}></img>
                <img src={'http://localhost:8080/image/jeans_pants2.jpg'}></img>
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
}

export default ProductDetails;