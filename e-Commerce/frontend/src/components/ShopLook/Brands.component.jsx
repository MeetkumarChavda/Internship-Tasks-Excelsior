import '../css/Brands.css';
// import SwiperJS from "swiper/bundle";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/pagination'; // Optional: For pagination dots
import { Pagination } from "swiper/modules";

const brands = [
    { brand: 'src/assets/brand-01.png' },
    { brand: 'src/assets/brand-02.png' },
    { brand: 'src/assets/brand-03.png' },
    { brand: 'src/assets/brand-04.png' },
    { brand: 'src/assets/brand-05.png' },
    { brand: 'src/assets/brand-06.png' },
  ];
  

  const Brands = () => {
    return (
        <>
        <div className="py-5 d-none d-lg-block" style={{ marginLeft: "1.2rem", marginRight: "1.2rem" }}>
            <div className=" row justify-content-center align-items-center ">
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="col-6 col-sm-4 col-md-2 text-center border p-4 "
                        style={{
                            borderTopLeftRadius: index === 0 ? "10px" : "0px",
                            borderBottomLeftRadius: index === 0 ? "10px" : "0px",
                            borderTopRightRadius: index === brands.length - 1 ? "10px" : "0px",
                            borderBottomRightRadius: index === brands.length - 1 ? "10px" : "0px",
                        }}
                    >
                        {brand.brand ? (
                            <img
                                src={brand.brand}
                                alt={`brand-${index}`}
                                className="img-fluid"
                                style={{ maxHeight: '50px' }}
                            />
                        ) : (
                            <span className="fw-bold">{brand.name}</span>
                        )}
                    </div>
                ))}
            </div>

        </div>
        <div className="d-lg-none py-5" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
            <div >
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={2}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                    }}
                    pagination={{ clickable: true }}
                    className=' position-relative'
                    style={{paddingBottom:"3rem"}}
                >
                    {brands.map((brand, index) => (
                        <SwiperSlide key={index} 
                        >
                            <div className="text-center border p-3">
                                {brand.brand ? (
                                    <img
                                        src={brand.brand}
                                        alt={brand.name}
                                        className="img-fluid"
                                        style={{ maxHeight: '50px' }}
                                    />
                                ) : (
                                    <span className="fw-bold">brand</span>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </>
    );
  };

export default Brands


// import React, { useEffect } from "react";
// import SwiperJS from "swiper/bundle";
// import "swiper/swiper-bundle.css";
// import './css/swiper.css';


// const Swiper = () => {
  
//   useEffect(() => {
//     new SwiperJS("#swiper-3", {
//       slidesPerView: 1,
//       centeredSlides: true,
//       spaceBetween: 24,
//       pagination: {
//         el: "#swiper-3 .swiper-custom-pagination",
//         clickable: true,
//       },
//       lazy: true,
//       loop: true,
//       keyboard: {
//         enabled: true,
//       },
//       navigation: {
//         nextEl: "#nav-right2",
//         prevEl: "#nav-left2",
//       },
//       breakpoints: {
//         // Mobile screen
//         300: {
//           slidesPerView: 2,
//           centeredSlides: false,
//         },
//         // Tablet screen
//         768: {
//           slidesPerView: 2,
//           centeredSlides: false,
//         },
//         // Desktop screen
//         1024: {
//           slidesPerView: 3,
//           centeredSlides: false,
//         },
//       },
//     });
//   }, []);

//   return (
//     <section>
//       <div className="container wide">
//         <div className="swiper" id="swiper-2">
//           <div className="swiper-wrapper">
//             {categories.map((category, index) => (
//               <div className="swiper-slide" key={index}>
//                 <figure>
//                   <img src={category.image} alt={category.name} />
//                   <figcaption className="bg-white text-black">{category.name}</figcaption>
//                 </figure>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Swiper;
