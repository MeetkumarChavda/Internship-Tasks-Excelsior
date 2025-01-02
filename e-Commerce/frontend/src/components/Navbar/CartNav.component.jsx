import React, { useState } from "react";
import { LuNotebookPen } from "react-icons/lu";
import { PiTruckLight, PiGift } from "react-icons/pi";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "../css/CartNav.css";

const CartNav = () => {
  // Cart items state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "T-shirt",
      description: "light gray",
      price: 12.99,
      quantity: 1,
      image: "src/assets/white-2.jpg",
    },
    {
      id: 2,
      name: "T-shirt",
      description: "light gray",
      price: 12.99,
      quantity: 1,
      image: "src/assets/white-1.jpg",
    },
  ]);

  // Recommended products
  const recommendedProducts = [
    {
      id: 1,
      name: "Loose Fit Sweatshirt",
      price: "$25.00",
      image: "src/assets/white-1.jpg",
    },
    {
      id: 2,
      name: "Casual T-Shirt",
      price: "$15.00",
      image: "src/assets/white-2.jpg",
    },
  ];

  // Progress bar logic
  const freeShippingThreshold = 75.0;
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const remainingAmount = Math.max(freeShippingThreshold - subtotal, 0);
  const progressPercentage = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  // Quantity handlers
  const handleIncrease = (itemId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (itemId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <section className="position-relative min-vh-100 d-flex flex-column">
      {/* Progress Bar Section */}
      <div className="mb-3 my-2" style={{ borderBottom: '1px solid #ebebeb' }}>
        <div className="progress" style={{ height: '5px', position: 'relative' }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${progressPercentage}%`, backgroundColor: '#db1215' }}
            aria-valuenow={subtotal}
            aria-valuemin="0"
            aria-valuemax={freeShippingThreshold}
          />
        </div>
        <div
          className="progress-icon"
          style={{ left: `${progressPercentage}%` }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="#db1215">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.441406 1.13155C0.441406 0.782753 0.724159 0.5 1.07295 0.5H12.4408C12.7896 0.5 13.0724 0.782753 13.0724 1.13155V2.91575H16.7859C18.8157 2.91575 20.5581 4.43473 20.5581 6.42296V11.8878C20.5581 12.2366 20.2753 12.5193 19.9265 12.5193H18.7542C18.4967 13.6534 17.4823 14.5 16.2703 14.5C15.0582 14.5 14.0439 13.6534 13.7864 12.5193H7.20445C6.94692 13.6534 5.93259 14.5 4.72054 14.5C3.50849 14.5 2.49417 13.6534 2.23664 12.5193H1.07295C0.724159 12.5193 0.441406 12.2366 0.441406 11.8878V1.13155Z" />
          </svg>
        </div>
        <p className="mt-3">
          Buy <strong>${remainingAmount.toFixed(2)}</strong> more to enjoy <strong>Free Shipping</strong>
        </p>
      </div>

      {/* Cart Items Section */}
      <div className="flex-grow-1 overflow-auto pb-3">
        {cartItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="d-flex align-items-center mb-3">
              <img src={item.image} alt={item.name} style={{ width: "64px" }} />
              <div className="ms-3">
                <p className="mb-0">{item.name}</p>
                <small className="text-muted">{item.description}</small>
                <p className="mb-0 fw-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="ms-auto">
                <div className="d-flex align-items-center bg-light rounded">
                  <button
                    className="btn border-0 p-1 px-2"
                    onClick={() => handleDecrease(item.id)}
                  >
                    <FaMinus size={12} />
                  </button>
                  <input
                    type="text"
                    className="border-0 bg-transparent text-center p-0"
                    style={{
                      width: "30px",
                      fontSize: "14px",
                    }}
                    value={item.quantity}
                    readOnly
                  />
                  <button
                    className="btn border-0 p-1 px-2"
                    onClick={() => handleIncrease(item.id)}
                  >
                    <FaPlus size={12} />
                  </button>
                </div>
              </div>
            </div>
            {index < cartItems.length - 1 && <hr />}
          </React.Fragment>
        ))}

        {/* Recommended Products Swiper */}
        <div style={{ maxWidth: "20rem" }}>
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
          >
            {recommendedProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="card p-2 position-relative">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title mb-0 fw-bold">You may also like</h5>
                    <div className="custom-pagination"></div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: "100px", height: "auto" }}
                    />
                    <div className="ms-3 me-4">
                      <h6 className="mb-1">{product.name}</h6>
                      <p className="mb-0 fw-bold">{product.price}</p>
                    </div>
                    <button className="btn btn-dark rounded-circle ms-3" style={{ height: '46px', padding: '10px' }}>
                      <MdOutlineRemoveRedEye size={24} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pb-1 w-100" style={{ backgroundColor: "#fff" }}>
        <div className="features-section mb-3">
          <div className="icon-container">
            <LuNotebookPen />
          </div>
          <div className="icon-container">
            <PiTruckLight />
          </div>
          <div className="icon-container">
            <PiGift />
          </div>
        </div>

        <div className="pb-3" style={{ borderBottom: '1px solid #ebebeb' }}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="mb-0">Subtotal</h5>
            <h5 className="mb-0 fw-bold">${subtotal.toFixed(2)} USD</h5>
          </div>
          <small className="text-muted">
            Taxes and <span className="text-decoration-underline text-dark">shipping</span> calculated at checkout
          </small>
        </div>

        <div className="form-check mt-2 p-0 d-flex align-items-center">
          <input className="form-check-input m-0 p-0 me-2" type="checkbox" id="termsCheck" />
          <label className="form-check-label" htmlFor="termsCheck">
            I agree with the <a href="#" className="text-dark">terms and conditions</a>
          </label>
        </div>

        <div className="mt-3">
          <button className="btn btn-outline-dark w-100 mb-2">View Cart</button>
          <button className="btn btn-dark w-100">Check Out</button>
        </div>
      </div>
    </section>
  );
};

export default CartNav;
























// // CartItems.js - Create this file for the items data
// const cartItems = [
//   {
//     id: 1,
//     name: "T-shirt",
//     color: "light gray",
//     price: 12.99,
//     image: "src/assets/white-2.jpg"
//   },
//   {
//     id: 2,
//     name: "T-shirt",
//     color: "light gray",
//     price: 12.99,
//     image: "src/assets/white-1.jpg"
//   }
// ];

// // CartNav.component.jsx
// import "../css/CartNav.css";
// import React, { useState } from "react";
// import { LuNotebookPen } from "react-icons/lu";
// import { PiTruckLight, PiGift } from "react-icons/pi";
// import { FaPlus, FaMinus } from "react-icons/fa6";
// // import { cartItems } from "./CartItems";

// const CartNav = () => {
//   const [quantities, setQuantities] = useState(
//     cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
//   );

//   const handleIncrease = (itemId) => {
//     setQuantities(prev => ({
//       ...prev,
//       [itemId]: prev[itemId] + 1
//     }));
//   };

//   const handleDecrease = (itemId) => {
//     setQuantities(prev => ({
//       ...prev,
//       [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 1
//     }));
//   };

//   const calculateSubtotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + (item.price * quantities[item.id]);
//     }, 0).toFixed(2);
//   };

//   return (
//     <section className="position-relative min-vh-100 d-flex flex-column">
//       <div className="srollable-container flex-grow-1 p-3">
//         <div className="mb-4">
//           <h2 className="text-center">Cart</h2>
//         </div>
        
//         {/* Cart Items Container */}
//         <div className="cart-items-container">
//           {cartItems.map((item) => (
//             <div key={item.id} className="d-flex mb-4 cart-item">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="cart-item-image"
//               />
//               <div className="flex-grow-1 ms-3">
//                 <h4 className="fs-5">{item.name}</h4>
//                 <p className="text-muted mb-2">{item.color}</p>
//                 <span className="fw-bold d-block mb-2">${item.price} USD</span>
//                 <div className="d-flex align-items-center bg-light rounded quantity-control">
//                   <button
//                     className="btn border-0 p-1 px-2"
//                     onClick={() => handleDecrease(item.id)}
//                   >
//                     <FaMinus size={12} />
//                   </button>

//                   <input
//                     type="text"
//                     className="border-0 bg-transparent text-center p-0"
//                     style={{
//                       width: "30px",
//                       fontSize: "14px",
//                     }}
//                     value={quantities[item.id]}
//                     readOnly
//                   />

//                   <button
//                     className="btn border-0 p-1 px-2"
//                     onClick={() => handleIncrease(item.id)}
//                   >
//                     <FaPlus size={12} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Fixed Bottom Container */}
//       <div className="fixed-container w-100 bg-white">
//         <div className="service-icons d-flex px-3 py-3 justify-content-between"
//              style={{ backgroundColor: "#f5f5f5" }}>
//           <span className="bg-white p-2 rounded">
//             <LuNotebookPen className="service-icon" />
//           </span>
//           <span className="bg-white p-2 rounded">
//             <PiTruckLight className="service-icon" />
//           </span>
//           <span className="bg-white p-2 rounded">
//             <PiGift className="service-icon" />
//           </span>
//         </div>
//         <div className="p-3">
//           <div className="d-flex align-items-center justify-content-between mb-2">
//             <h3 className="fs-4 mb-0">Subtotal</h3>
//             <h2 className="fs-4 mb-0">${calculateSubtotal()} USD</h2>
//           </div>
//           <p className="text-muted small">
//             Taxes and <span className="text-decoration-underline">shipping</span> calculated at checkout
//           </p>
//           <hr />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CartNav;