import React, { useEffect } from "react";
import SwiperJS from "swiper/bundle";
import "swiper/swiper-bundle.css";
import './css/swiper.css';

import cItem1 from '../assets/collection-17.jpg'
import cItem2 from '../assets/collection-14.jpg'
import cItem3 from '../assets/collection-18.jpg'
import cItem4 from '../assets/collection-20.jpg'
import cItem5 from '../assets/collection-15.jpg'
import cItem6 from '../assets/collection-2.jpg'


const Swiper = () => {
  const categories = [
    { name: "Clothing", image: cItem1 },
    { name: "Sunglasses", image: cItem2},
    { name: "Bag", image: cItem3 },
    { name: "Shoes", image: cItem4},
    { name: "Men", image: cItem5 },
    { name: "Women", image: cItem6 },
  ];

  useEffect(() => {
    new SwiperJS("#swiper-2", {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 24,
      pagination: {
        el: "#swiper-2 .swiper-custom-pagination",
        clickable: true,
      },
      lazy: true,
      loop: true,
      keyboard: {
        enabled: true,
      },
      navigation: {
        nextEl: "#nav-right",
        prevEl: "#nav-left",
      },
      breakpoints: {
        // Mobile screen
        300: {
          slidesPerView: 2,
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
    <section>
      <div className="container wide">
        <div className="swiper" id="swiper-2">
          <div className="swiper-wrapper">
            {categories.map((category, index) => (
              <div className="swiper-slide" key={index}>
                <figure>
                  <img src={category.image} alt={category.name} />
                  <figcaption className="bg-white text-black">{category.name}</figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Swiper;
