import React, { useEffect } from "react";
import SwiperJS from "swiper/bundle";
import "swiper/swiper-bundle.css";
import '../css/ShopGram.css';
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSupport } from "react-icons/bi";
import {  MdOutlinePayment, MdKeyboardReturn } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

const images = [
  { img: 'src/assets/gallery-3.jpg' },
  { img: 'src/assets/gallery-5.jpg' },
  { img: 'src/assets/gallery-6.jpg' },
  { img: 'src/assets/gallery-7.jpg' },
  { img: 'src/assets/gallery-8.jpg' },
];

const features = [
    {
        icon: <FiBox size={40} />,
        title: "Free Shipping",
        description: "Free shipping over order $120",
    },
    {
        icon: <MdOutlinePayment size={40} />,
        title: "Flexible Payment",
        description: "Pay with Multiple Credit Cards",
    },
    {
        icon: <MdKeyboardReturn size={40} />,
        title: "14 Day Returns",
        description: "Within 30 days for an exchange",
    },
    {
        icon: <BiSupport size={40} />,
        title: "Premium Support",
        description: "Outstanding premium support",
    },
];

const ShopGram = () => {
  useEffect(() => {
    new SwiperJS("#swiper-5", {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 24,
      pagination: {
        el: "#swiper-5 .swiper-custom-pagination",
        clickable: true,
      },
      lazy: true,
      loop: true,
      keyboard: { enabled: true },
      breakpoints: {
        300: { slidesPerView: 2, centeredSlides: false },
        768: { slidesPerView: 3, centeredSlides: false },
        1024: { slidesPerView: 5, centeredSlides: false },
      },
    });
  }, []);

  return (
    <section className="shopgram-container d-flex flex-column  text-center pb-5 px-4 overflow-hidden">
      <h1>Shop Gram</h1>
      <p>Inspire and let yourself be inspired, from one unique fashion to another</p>
      <div className="swiper-container" id="swiper-5">
        <div className="swiper-wrapper">
          {images.map((image, index) => (
            <div className="swiper-slide position-relative" key={index}>
              <figure>
                  <div 
                    className="bg-white p-4"
                    style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)', borderRadius: '50%',cursor:"pointer"}}
                  >
                    <FiShoppingBag className="position-absolute  " 
                      size={'25px'}
                      style={{transform: 'translate(-50%, -50%)'}} />
                  </div>
                  <img
                  src={image.img}
                  alt={`Slide ${index + 1}`}
                  className="swiper-img"
                  loading="lazy"
                />
              </figure>
            </div>
          ))}
        </div>
        {/* <div className="swiper-custom-pagination"></div> */}
      </div>
      <div className="py-5">
            {/* {/ For larger screens /} */}
            <div className="d-none d-md-block">
                <div className="row">
                    {features.map((feature, index) => (
                        <div className="col-lg-3 col-md-6 mb-md-4 mb-lg-0 text-center" key={index}>
                            <div className="p-3 pt-5 border rounded">
                                <div style={{ marginBottom: "2.2rem" }} >{feature.icon}</div>
                                <h5>{feature.title}</h5>
                                <p className="text-muted">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* {/ For smaller screens /} */}
            <div className="d-md-none">
                <Swiper
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                    style={{paddingBottom:"2.8rem"}}
                >
                    {features.map((feature, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-center p-3 border rounded">
                                <div style={{ marginBottom: "2.2rem" }}>{feature.icon}</div>
                                <h5>{feature.title}</h5>
                                <p className="text-muted">{feature.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
      
    </section>
  );
};

export default ShopGram;
