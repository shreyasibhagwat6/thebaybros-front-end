import React, { useParams, useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import ImageSlider from '../ImageSlider/ImageSlider';
import './ProductDetails.scss';
import axios from 'axios';

const ProductDetails = () => {

    const [product, setProduct] = useState('');
    // const [modal, setModal] = useState(false);
    const [show, setShow] = useState(false);
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

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
                <div className='size'>
                    <p className= 'size__text'>Size</p>
                    <p className="size__text" onClick={() => handleShow()}>Size Guide</p>
                </div>
                <div className='size'>
                    <div className='size__num'>4</div>
                    <div className='size__num'>6</div>
                    <div className='size__num'>8</div>
                    <div className='size__num'>10</div>
                </div>
            </div>
            <div>
                <p>Shipping and Pickup</p>
            </div>
            <div>
                {product.product_details}
            </div>
            <p>Style Code: {product.product_code}</p>
            <>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Size Guide</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Free People</h4>
            <p>Category: Denim</p>
            <div className='measure'>
                <p className='measure__cont--inch'>Inches</p>
                <p className='measure__cont'>Centimeters</p>
            </div>
            <div className='size__container'>
                <div className='size__title'>US/Canadian Sizing</div>
                <svg className='size__arrow' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-chevron-compact-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
                </svg>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Size</th>
                        <th>Inseam</th>
                        <th>Waist</th>
                        <th>Hip</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>24</td>
                        <td>32</td>
                        <td>24.5</td>
                        <td>34.5</td>
                    </tr>
                    <tr>
                        <td>25</td>
                        <td>32</td>
                        <td>25.5</td>
                        <td>35.5</td>
                    </tr>
                    <tr>
                        <td>26</td>
                        <td>32</td>
                        <td>26.5</td>
                        <td>36.5</td>
                    </tr>
                    <tr>
                        <td>27</td>
                        <td>32</td>
                        <td>27.5</td>
                        <td>37</td>
                    </tr>
                    <tr>
                        <td>28</td>
                        <td>40</td>
                        <td>28.5</td>
                        <td>38.5</td>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td>40</td>
                        <td>29.5</td>
                        <td>39.5</td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td>40</td>
                        <td>30.5</td>
                        <td>40.5</td>
                    </tr>
                    <tr>
                        <td>32</td>
                        <td>40</td>
                        <td>30.5</td>
                        <td>41.5</td>
                    </tr>
                </tbody>
            </Table>
            <div className='size__container'>
                <div className='size__title'>UK Sizing</div>
                <svg className='size__arrow' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                </svg>
            </div>
        </Modal.Body>
      </Modal>
    </>
        </div>
    )
};

export default ProductDetails;