import "swiper/css";
import '../css/PopUp.css'
import "swiper/css/navigation";

import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";


const ViewProduct = ({ product, show, onClose, showCart }) => {

    const [selectedColors, setSelectedColors] = useState(product.colors && product.colors[0]); // Track selected color for each product
    const [selectedSize, setSelectedSize] = useState(product.sizes && product.sizes[0]);
    const [hoveredColor, setHoveredColor] = useState(null); // Track hovered color
    const [quantity, setQuantity] = useState(1);
    const handleIncrease = () => setQuantity((prev) => prev + 1);
    const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));


    const handleColorSelect = (color) => {
        setSelectedColors(color)
    };

    if (!product) return null

    return (
        <>
            <Modal show={show} onHide={onClose} centered size="lg" className=" ">
                <Modal.Header className="p-0 border-0" >
                    <button
                        type="button"
                        className="btn-close position-absolute"
                        aria-label="Close"
                        style={{ top: "14px", right: "14px", zIndex:'10' }}
                        onClick={onClose} // Attach the onClose function here
                    ></button>
                </Modal.Header>
                <Modal.Body className="p-0"  >
                    <div className="row flex-column flex-lg-row">
                        <div className="col-lg-6  text-center ">
                            <Swiper
                                modules={[Navigation]}
                                navigation
                                style={{ height: "629px" }} // Adjust height to fit your design
                              >
                                <SwiperSlide>
                                    <img
                                        src={'../../src/assets/pink-1.jpg'}
                                        alt = 'c-1'
                                        className="  img-fluid  "
                                        style={{ height: "100%", objectFit: "cover" }}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={'../../src/assets/pink-2.jpg'}
                                        alt='c-2'
                                        className=" img-fluid"
                                        style={{ height: "100%", objectFit: "cover" }}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={'../../src/assets/purple.jpg'}
                                        alt='c-3'
                                        className=" img-fluid"
                                        style={{ height: "100%", objectFit: "cover" }}
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                      {/* </div> */}
                        {/* Details Section */}
                        <div className="col-lg-6 mt-5 px-3">
                            <Modal.Title className="mb-3">{product.name}</Modal.Title>
                            <div className="d-flex align-items-center mb-3">
                                <span className="badge bg-dark text-white py-1 px-2 me-2">BEST SELLER</span>
                                <p className="text-muted m-0" style={{ fontSize: "14px" }}>
                                    Selling fast! 48 people have this in their carts.
                                </p>
                            </div>
                            <h5 className="fw-bold">{product.price}</h5>
                            <p className="text-secondary">
                                {product.description || "Product description goes here."}
                            </p>

                            {/* Color Options */}
                            <div className="mb-3">
                                <p>
                                    Color: <strong>{selectedColors.charAt(0).toUpperCase() + selectedColors.slice(1)}</strong>
                                </p>
                                <div className="d-flex gap-2">
                                    {product.colors.map((color, index) => (
                                        <span
                                            key={index}
                                            className={`rounded-circle`}
                                            style={{
                                                width: "30px",
                                                height: "30px",
                                                border: selectedColors === color ? "2px solid black" : "0px",
                                                cursor: "pointer",
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                            onClick={() => handleColorSelect(color)}
                                        >
                                            <span style={{
                                                backgroundColor: color, width: "20px",
                                                height: "20px", display: 'inline-block', borderRadius: '50%',
                                                border: "1px solid #ddd",
                                            }} />
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Size Options */}
                            <div className="mb-3">
                                <p>
                                    Size: <strong>{selectedSize}</strong>
                                </p>
                                <div className="d-flex gap-2">
                                    {product.sizes.map((size, index) => (
                                        <button
                                            key={index}
                                            className={`btn btn-outline-dark ${selectedSize === size ? "active" : ""}`}
                                            onClick={() => setSelectedSize(size)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div className="mb-3">
                                <strong>Quantity</strong>
                                <div className="d-flex align-items-center gap-2 mt-2 pe-2">
                                    <button className="btn btn-outline-dark" onClick={handleDecrease}>
                                        <FaMinus />
                                    </button>
                                    <input
                                        type="text"
                                        className="form-control text-center"
                                        value={quantity}
                                        readOnly

                                    />
                                    <button className="btn btn-outline-dark" onClick={handleIncrease}>
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>

                            {/* Add to Cart and Other Buttons */}
                            <div className="d-flex gap-2 mb-3 pe-2">
                                <button className="btn btn-dark flex-grow-1">
                                    Add to cart - ${(product.price.slice(1) * quantity).toFixed(2)}
                                </button>
                                <button className="btn btn-outline-dark">
                                    <FaRegHeart />
                                </button>
                                <button className="btn btn-outline-dark ">
                                    <MdCompareArrows />
                                </button>
                            </div>

                            {/* PayPal Button */}
                            <div className="mb-3 pe-2">
                                <button className="btn btn-warning w-100">
                                    Buy with <strong>PayPal</strong>
                                </button>
                            </div>
                            <a href="#" className="text-decoration-underline d-block text-center text-secondary">
                                More payment options
                            </a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showCart} onHide={onClose} centered  >
                <Modal.Header className="p-0 border-0" >
                    <button
                        type="button"
                        className="btn-close position-absolute"
                        aria-label="Close"
                        style={{ top: "15px", right: "15px", zIndex:'10' }}
                        onClick={onClose} // Attach the onClose function here
                    ></button>

                </Modal.Header>
                <Modal.Body className="p-2"  >
                    <div className="row flex-column flex-lg-row ">
                        <div className="text-center  d-flex p-3">
                            <img
                                src={'../../src/assets/img-p5.png'}
                                // alt={`${product.name} - Image ${index + 1}`}
                                className="  img-fluid me-3"
                            />
                            <div className="d-flex flex-column align-items-start justify-content-center">
                                <Modal.Title className="" style={{ fontSize: "20px" }}>{product.name}</Modal.Title>
                                <h5 className="fw-bold" style={{ fontSize: "20px" }}>{product.price}</h5>
                            </div>
                        </div>
                        {/* Details Section */}
                        <div className=" px-3">

                            {/* Color Options */}
                            <div className="mb-3">
                                <p>
                                    Color: <strong>{selectedColors.charAt(0).toUpperCase() + selectedColors.slice(1)}</strong>
                                </p>
                                <div className="d-flex gap-2">
                                    {product.colors.map((color, index) => (
                                        <span
                                            key={index}
                                            className={`rounded-circle`}
                                            style={{
                                                width: "30px",
                                                height: "30px",
                                                border: selectedColors === color ? "2px solid black" : "0px",
                                                cursor: "pointer",
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                            onClick={() => handleColorSelect(color)}
                                        >
                                            <span style={{
                                                backgroundColor: color, width: "20px",
                                                height: "20px", display: 'inline-block', borderRadius: '50%',
                                                border: "1px solid #ddd",
                                            }} />
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Size Options */}
                            <div className="mb-3">
                                <p>
                                    Size: <strong>{selectedSize}</strong>
                                </p>
                                <div className="d-flex gap-2">
                                    {product.sizes.map((size, index) => (
                                        <button
                                            key={index}
                                            className={`btn btn-outline-dark ${selectedSize === size ? "active" : ""}`}
                                            onClick={() => setSelectedSize(size)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div className="mb-3">
                                <strong>Quantity</strong>
                                <div className="d-flex align-items-center gap-2 mt-2  pe-2">
                                    <button className="btn btn-outline-dark" onClick={handleDecrease}>
                                        <FaMinus />
                                    </button>
                                    <input
                                        type="text"
                                        className="form-control text-center "
                                        value={quantity}
                                        readOnly
                                    />
                                    <button className="btn btn-outline-dark" onClick={handleIncrease}>
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>

                            {/* Add to Cart and Other Buttons */}
                            <div className="d-flex gap-2 mb-3 pe-2">
                                <button className="btn btn-dark flex-grow-1">
                                    Add to cart - ${(product.price.slice(1) * quantity).toFixed(2)}
                                </button>
                                <button className="btn btn-outline-dark">
                                    <FaRegHeart />
                                </button>
                                <button className="btn btn-outline-dark ">
                                    <MdCompareArrows />
                                </button>
                            </div>

                            {/* PayPal Button */}
                            <div className="mb-3 pe-2">
                                <button className="btn btn-warning w-100">
                                    Buy with <strong>PayPal</strong>
                                </button>
                            </div>
                            <a href="#" className="text-decoration-underline d-block text-center text-secondary">
                                More payment options
                            </a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};



export default ViewProduct;