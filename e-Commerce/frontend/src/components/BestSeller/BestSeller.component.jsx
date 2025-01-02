import "../css/BestSeller.css";
import { useState } from "react";
import { TbArrowsCross } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";


import ViewProduct from "../popUps/ViewProduct.component";


const BestSeller = () => {
  const [selectedColors, setSelectedColors] = useState({}); // Track selected color for each product
  const [hoveredColor, setHoveredColor] = useState(null); // Track hovered color

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCartProduct, setSelectedCartProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);

  const handleColorSelect = (productId, color) => {
    setSelectedColors((prevState) => ({
      ...prevState,
      [productId]: color, // Update the selected color for the product
    }));
  };


  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const handleCartProductClick = (product) => {
    setSelectedCartProduct(product);
    setShowCartPopup(true);
  };

  const handleClosePopup = () => {
    
    setShowPopup(false);
    setSelectedProduct(null);
    setShowCartPopup(false);
    setSelectedCartProduct(null);
  };

  const products = [
    {
      id: 1,
      name: "Ribbed Tank Top",
      price: "$16.95",
      image: "/assets/orange-1.jpg", // Replace with actual image URL
      colors: ["orange", "black", "white"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 2,
      name: "Ribbed modal T-shirt",
      price: "From $18.95",
      image: "/assets/brown.jpg",
      colors: ["white", "pink", "green"],
      sizes: ["S", "M", "L", "XL"],
      saleTime: "11d : 15h : 50m : 02s",
    },
    {
      id: 3,
      name: "Oversized Printed T-shirt",
      price: "$10.00",
      image: "/assets/white-3.jpg",
    },
    {
      id: 4,
      name: "Oversized Printed T-shirt",
      price: "$16.95",
      image: "/assets/white-2.jpg",
      colors: ["black", "pink", "white"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 5,
      name: "Oversized Printed T-shirt2",
      price: "$16.95",
      image: "/assets/brown-2.jpg",
      colors: ["black", "pink", "white"],
      saleTime: "11d : 15h : 50m : 02s",
    },
    {
      id: 6,
      name: "Oversized Printed T-shirt",
      price: "$16.95",
      image: "/assets/light-green-1.jpg",
      colors: ["black", "pink", "white"],
    },
    {
      id: 7,
      name: "Oversized Printed T-shirt",
      price: "$16.95",
      image: "/assets/black-4.jpg",
      colors: ["black", "pink", "white"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 8,
      name: "Oversized Printed T-shirt",
      price: "$16.95",
      image: "/assets/white-8.jpg",
      colors: ["black", "pink", "white"],
    },
  ];

  return (
    <section className="d-flex flex-column align-items-center justify-content-center text-center">
      <h1 className="fs-1 fw-bold">Best Seller</h1>
      <p className="fs-5 text-muted">
        Stop the Latest Style: Stay ahead of the curve with our newest arrivals
      </p>
      <div>
        <div className="px-lg-4 p-3">
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3 mb-4">
                <div className="card h-100 border-0 ">
                  {/* Product Image */}
                  <div className="main_product_img">
                    <img
                      src={`src/${product.image}`}
                      alt={product.name}
                      className="card-img-top h-100"
                      style={{ objectFit: "cover", height: "250px" }}
                    />

                    {/* saleTime */}
                    {product.saleTime && (
                      <div 
                      className={`${
                        product.sizes ? 'sale-time-container-extended' : 'sale-time-container'
                      } bg-white text-danger position-absolute px-3 `}
                      >
                          <h3 className= "saleTime-text">
                            {product.saleTime}
                          </h3>
                      </div>
                    )}

                    
                    {/* icons */}
                    <div 
                      className={`${
                        product.sizes ? 'overlay-image-extended' : 'overlay-image'
                      } d-flex justify-content-center align-items-center gap-3 gap-lg-4`} 
                    >           
                      <div className="bg-white p-2 icon-container">
                        <FiShoppingBag  size={"22px"} onClick={() => handleCartProductClick(product)} />
                      </div>
                      <div className="bg-white p-2 icon-container d-none d-md-block">
                        <TbArrowsCross size={"22px"} />
                      </div>
                      <div className="bg-white p-2 icon-container d-none d-md-block">
                        <FaRegHeart size={"22px"}/>
                      </div>
                      <div className="bg-white p-2 icon-container">
                        <MdOutlineRemoveRedEye size={"22px"} onClick={() => handleProductClick(product)}/>
                      </div>
                    </div>

                    {/* Product size box */}
                    {product.sizes && (
                      <div className="size-container overlay d-flex justify-content-center align-items-center">
                        <div className="d-flex gap-4 text-white">
                          {product.sizes.map((size) => (
                            <div key={size}>{size}</div>
                          ))}
                          {/* </div> */}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Product Info */}
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{product.name}</h5>
                    <p className="card-text text-muted">{product.price}</p>
                    {product.colors && (
                      <div className="d-flex justify-content-center gap-2">
                        {product.colors.map((color, index) => (
                          <label
                            key={index}
                            className="rounded-circle"
                            style={{
                              width: "20px",
                              height: "20px",
                              backgroundColor: color,
                              border:
                                selectedColors[product.id] === color
                                  ? "3px solid black"
                                  : hoveredColor === `${product.id}-${color}`
                                  ? "3px solid gray"
                                  : "2px solid #ddd",
                              display: "inline-block",
                              cursor: "pointer",
                              position: "relative",
                              transition: "border 0.2s ease-in-out",
                            }}
                            onClick={() => handleColorSelect(product.id, color)}
                            onMouseEnter={() =>
                              setHoveredColor(`${product.id}-${color}`)
                            }
                            onMouseLeave={() => setHoveredColor(null)}
                          >
                            <input
                              type="radio"
                              name={`color-${product.id}`}
                              value={color}
                              className="color-input"
                              style={{
                                opacity: 0,
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                margin: 0,
                                cursor: "pointer",
                              }}
                            />
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProduct &&
        <ViewProduct
          product={selectedProduct}
          show={showPopup}
          onClose={handleClosePopup}
        />
      }

    {selectedCartProduct &&
        <ViewProduct
          product={selectedCartProduct}
          showCart={showCartPopup}
          onClose={handleClosePopup}
        />
      }

    </section>
  );
};

export default BestSeller;
