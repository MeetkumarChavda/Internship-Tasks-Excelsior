import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/Testimonials.css";
import SwiperJS from "swiper/bundle";
import "swiper/swiper-bundle.css";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

import image1 from "../../assets/img-p2.png";
import image2 from "../../assets/img-p3.png";
import image3 from "../../assets/img-p4.png";
import image4 from "../../assets/img-p5.png";
import image5 from "../../assets/img-p2.png";

const testimonials = [
  {
    id: 1,
    rating: 5,
    comment:
      "The product quality is excellent, and the customer service is top-notch.",
    title: "Excellent Service",
    name: "John Doe",
    location: "New York, USA",
    product: "Jersey thong body",
    price: "$105.95",
    image: image1,
  },
  {
    id: 2,
    rating: 4,
    comment: "I received my order promptly, and it exceeded my expectations.",
    title: "Fast Delivery",
    name: "Jane Smith",
    location: "London, UK",
    product: "Cotton jersey top",
    price: "$7.95",
    image: image2,
  },
  {
    id: 3,
    rating: 4,
    comment: "Affordable pricing with great features. Highly recommended!",
    title: "Great Value",
    name: "Michael Johnson",
    location: "Sydney, Australia",
    product: "Ribbed modal T-shirt",
    price: "From $18.95",
    image: image3,
  },
  {
    id: 4,
    rating: 5,
    title: "Best Customer Service",
    comment:
      "I finally found a web fashion site with stylish and flattering options in my size.",
    name: "Peter Rope",
    location: "USA",
    product: "Ribbed modal T-shirt",
    price: "From $18.95",
    image: image4,
  },
  {
    id: 5,
    rating: 5,
    title: "Best Customer Service",
    comment:
      "I finally found a web fashion site with stylish and flattering options in my size.",
    name: "Peter Rope",
    location: "USA",
    product: "Ribbed modal T-shirt",
    price: "From $18.95",
    image: image5,
  },
];

const renderStars = (rating) => {
  return [...Array(rating)].map((_, index) => (
    <span key={index} style={{ color: "#FF7B54", fontSize: "2rem" }}>
      ★
    </span>
  ));
};
const Testimonials = () => {
  useEffect(() => {
    new SwiperJS("#swiper-t", {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 24,
      pagination: {
        el: "#swiper-t .swiper-custom-pagination",
        clickable: true,
      },
      lazy: true,
      loop: false,
      keyboard: {
        enabled: true,
      },
      navigation: {
        nextEl: "#nav-right-t",
        prevEl: "#nav-left-t",
      },
      breakpoints: {
        // Mobile screen
        300: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        // Tablet screen
        768: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        // Desktop screen
        1024: {
          slidesPerView: 3,
          centeredSlides: false,
        },
      },
    });
  }, []);

  return (
    <section className="d-flex flex-column ">
      <div className="text-center">
        <h1>Happy Clients</h1>
        <p>Hear what they say about us</p>
      </div>

      <div className="container wide px-4 pb-2  position-relative">
      <AiOutlineLeftCircle
      className="nav-button left-button d-none d-lg-block"
      id="nav-left-t"
    />

    {/* Right Navigation Button */}
    <AiOutlineRightCircle
      className="nav-button right-button d-none d-lg-block"
      id="nav-right-t"
    />
        <div className="swiper" id="swiper-t">
          <div className="swiper-wrapper ">
            {testimonials.map((testimonial, index) => (
              <div
                className="swiper-slide px-5"
                key={index}
                style={{
                  width: "300px",
                  height: "450px",
                  borderRadius: "8px", // Slight roundness
                  border: "1px solid rgba(181, 180, 180, 0.51)", // Gray border
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional shadow for better appearance
                }}
              >
                {/* Stars */}
                <div className="my-3">{renderStars(testimonial.rating)}</div>

                {/* Title */}
                <div>
                  <h4>{testimonial.title}</h4>
                </div>
                {/* comment */}
                <div>
                  <p>{testimonial.comment}</p>
                </div>
                {/* customer info */}
                {/* Customer Info */}
                <div className="mt-4">
                  <h5>
                    {testimonial.name}
                    <br />
                    <small className="text-secondary">
                      Customer from {testimonial.location}
                    </small>
                  </h5>
                </div>

                <hr className="w-100 mt-4" />
                {/* Image and Product/Price Section */}
                <div className="d-flex align-items-center w-100 mt-4">
                  {/* Image and Product/Price Section */}
                  <div className="d-flex align-items-center gap-3">
                    {/* Image */}
                    <div
                      style={{
                        borderRadius: "10px", // Remove roundness
                        width: "80px", // Adjust the width as needed
                        height: "120px", // Adjust the height as needed
                        overflow: "hidden", // Ensure the image stays contained
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover", // Ensures the image covers the div fully
                          objectPosition: "top", // Adjust the focus area
                        }}
                      />
                    </div>

                    {/* Product & Price */}
                    <div className="text-start px-3">
                      <p className="mb-1">
                        <strong>Product:</strong> {testimonial.product}
                      </p>
                      <p className="mb-0">
                        <strong>Price:</strong> ${testimonial.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="swiper-custom-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
