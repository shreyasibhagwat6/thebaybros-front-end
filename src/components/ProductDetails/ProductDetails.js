import React, { useParams, useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ImageSlider from '../ImageSlider/ImageSlider';
import './ProductDetails.scss';
import snip from '../../assets/images/snip.JPG'
import axios from 'axios';
import { BsPlus } from 'react-icons/bs'
import { HiOutlineMinusSm } from 'react-icons/hi';

const ProductDetails = () => {

    const [product, setProduct] = useState('');
    // const [modal, setModal] = useState(false);
    const [show, setShow] = useState(false);
    const [bag, setBag] = useState(false);
    const [number, setNumber] = useState(1);
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [active, setActive] = useState('false');

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    const handleBag = () => setBag(true);
    const handleClose = () => setBag(false);
    

    const slides = [
        { url: "http://localhost:8080/image/jeans_jeans1.jpg", title: "beach" },
        { url: "http://localhost:8080/image/jeans_jeans2.jpg", title: "boat" },
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

    const clickHandler = () => {
        setActive(!active);
    }

    const addOne = () => {
        setNumber(number+1);
    }

    const minusOne = () => {
        setNumber(number-1)
    }

    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
      };

    return (
        <div className='product'>
             <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
            <div>
                <h3>{product.product_brand}</h3>
                <p>{product.product_name}</p>
                <h4>${product.price}</h4>
            </div>
            <div className='review'>
                <div className='review__num'>4.1</div>
                <div className='review__star'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"  class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='#8B8B8C' class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>
                </div>
                <div className='review_text'>Write a review</div>
            </div>
            <div className='ship'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
                <div className='ship__text'>Free shipping on orders over $49 from The Bay</div>
            </div>
            <div>Get $50 in HB Rewards points when you spend $250+ or 4 interest-free payments of $49.50 bi-weekly. Learn More</div>
            <div className='gift'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gift" viewBox="0 0 16 16">
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                </svg>
                <div>Eligible for Gift Receipt</div>
            </div>
            <h5 className='colour'>Colour: THE WEST</h5>
            <div>
                <div className='size'>
                    <h5 className= 'size__text'>Size</h5>
                    <p className="size__text" onClick={() => handleShow()}>Size Guide</p>
                </div>
                <img className='snip' alt='' src={snip}></img>
                <div className='size'>
                    <div onClick={clickHandler} className={active ? 'img2': 'app'}>24</div>
                    <div className='img2'>25</div>
                    <div className='img2'>26</div>
                    <div className='img2'>27</div>
                    <div className='img2'>28</div>
                    <div className='img2'>29</div>
                    <div className='img2'>30</div>
                    <div className='img2'>31</div>
                </div>
            </div>
            <div>
                
                <h5 className='qty__title'>Quantity</h5>
                <div className='qty'>
                    <HiOutlineMinusSm onClick={minusOne} className='qty__minus' fontSize='2rem'/>
                    <div className='qty__item'>{number}</div>
                    <BsPlus onClick={addOne} className='qty__plus' fontSize='2rem'/>
                </div>
            </div>
            <div className='deliver'>
                <h5>Shipping and Pickup</h5>
                <div className='deliver__ship'>Ship it</div>
                <div className='deliver__pickup'>Free Pickup in Store</div>
            </div>
            <div className='details'>
                <h5>Details</h5>
                <p>New from We The Free Collection, these vintage-inspired jeans are the perfect addition to your closet. With a rugged finish, they feature oversized side pockets and a raw-edge distressed hem, giving them a retro feel.</p>
                <ul>
                    <li>Belt Loops</li>
                    <li>Zip Fly</li>
                    <li>Front Button Closure</li>
                    <li>Side atch Pockets</li>
                    <li>Raw Edge Hem</li>
                    <li>Content: 100% Cotton</li>
                    <li>Care: Machine Wash Regularly</li>
                </ul>
                <h5> Size and Fit</h5>
                <ul>
                    <li>Mid-Rise: Waistband sits between the hips and navel.</li>
                    <li>Flared Leg: Opening around 21-27"</li>
                    <li>Inseam: Around 32"</li>
                    <li>Rise: 13"</li>
                    <li>Leg: Flare 21-27"</li>
                    <li>Length: 30"</li>
                    <li>Inseam: 32"</li>
                    <li>Stretch: Non-Stretch</li>
                </ul>
                <p>Model is 6'1"/185 cm wearing a size 27</p>
                {/* {product.product_details.split(".")} */}
                {/* {productArray[0]} */}
            </div>
            <button onClick={handleBag} className='bag'>ADD TO BAG</button>
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
    <>

      <Modal
        show={bag}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>ADDED TO BAG</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You just added a new item to your bag
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            KEEP SHOPPING
          </Button>
          <Button variant="primary">GO TO BAG</Button>
        </Modal.Footer>
      </Modal>
    </>
        </div>
    )
};

export default ProductDetails;