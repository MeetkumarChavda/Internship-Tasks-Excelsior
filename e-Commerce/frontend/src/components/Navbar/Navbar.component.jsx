import "../css/Navbar.css";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import NavDropdown from "react-bootstrap/NavDropdown";

import { IoIosArrowDown } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegUser, FaRegHeart, FaSearch } from "react-icons/fa";

import Offcanvas from 'react-bootstrap/Offcanvas';

import Login from "../UserRegister/Login.component";
import SignUp from "../UserRegister/SignUp.component";
import ResetPwd from "../UserRegister/ResetPwd.component";
import VerticalNavbar from "./VerticalNavbar.component";
import SearchNav from "./SearchNav.component";
import CartNav from "./CartNav.component";

const Navbar = () => {
  const [modalState, setModalState] = useState({
    login: false,
    signup: false,
    resetPwd: false,
  });
  const [showOffcanvas, setShowOffcanvas] = useState(false); // Offcanv
  const [showSearchBar, setShowSearchBar] = useState(false); // Offcanvas SearchBar
  const [showCart, setShowCart] = useState(false); // Offcanvas SearchBar

  const handleModalToggle = (modal, value) => {
    setModalState((prev) => ({ ...prev, [modal]: value }));
  };

  const toggleOffcanvas = (option) => {
    if(option.value ==='menu'){
      setShowOffcanvas(!showOffcanvas); // Toggle Offcanvas visibility
    }else if (option.value === 'search'){
      setShowSearchBar(!showSearchBar); // Toggle SearchBar visibility
    }else if (option.value === 'cart'){
      setShowCart(!showCart); // Toggle showCart visibility
    }
  };
  
  return (
    <>
      <nav  className="w-100 position-absolute z-1 d-flex px-3 py-2 py-lg-4 py-md-5 mt-1  justify-content-between align-items-center top-0">
      <HiMenuAlt2 className="d-lg-none fs-2" onClick={() => toggleOffcanvas({ value: 'menu' })} />
      <div className="ms-4 ms-lg-2 cursor-pointer">
          <img src={logo} alt="logo" />
        </div>

        <div className="d-none d-lg-flex gap-4">
          <NavDropdown
            title={
              <>
                Home
                <IoIosArrowDown style={{ marginLeft: "5px" }} />
              </>
            }
            id="basic-nav-dropdown"
            className="fw-semibold"
          >
            <NavDropdown.Item href="#home-intro">Introduction</NavDropdown.Item>
            <NavDropdown.Item href="#home-about">About Us</NavDropdown.Item>
            <NavDropdown.Item href="#home-contact">Contact</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={
              <>
                Shop
                <IoIosArrowDown style={{ marginLeft: "5px" }} />
              </>
            }
            id="basic-nav-dropdown"
            className="fw-semibold"
          >
            <NavDropdown.Item href="#shop-men">
              Men's Collection
            </NavDropdown.Item>
            <NavDropdown.Item href="#shop-women">
              Women's Collection
            </NavDropdown.Item>
            <NavDropdown.Item href="#shop-sale">Sale Items</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={
              <>
                Product
                <IoIosArrowDown style={{ marginLeft: "5px" }} />
              </>
            }
            id="basic-nav-dropdown"
            className="fw-semibold"
          >
            <NavDropdown.Item href="#product-new">
              New Arrivals
            </NavDropdown.Item>
            <NavDropdown.Item href="#product-featured">
              Featured Products
            </NavDropdown.Item>
            <NavDropdown.Item href="#product-categories">
              Categories
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={
              <>
                Pages
                <IoIosArrowDown style={{ marginLeft: "5px" }} />
              </>
            }
            id="basic-nav-dropdown"
            className="fw-semibold"
          >
            <NavDropdown.Item href="#pages-faq">FAQ</NavDropdown.Item>
            <NavDropdown.Item href="#pages-testimonials">
              Testimonials
            </NavDropdown.Item>
            <NavDropdown.Item href="#pages-terms">
              Terms & Conditions
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={
              <>
                Blog
                <IoIosArrowDown style={{ marginLeft: "5px" }} />
              </>
            }
            id="basic-nav-dropdown"
            className="fw-semibold"
          >
            <NavDropdown.Item href="#blog-latest">
              Latest Posts
            </NavDropdown.Item>
            <NavDropdown.Item href="#blog-guides">
              Style Guides
            </NavDropdown.Item>
            <NavDropdown.Item href="#blog-news">News</NavDropdown.Item>
          </NavDropdown>

          <div className="fw-semibold cursor-pointer">Buy Now</div>
        </div>

        <div className="d-flex gap-3 me-lg-4">
        <FaSearch className="fs-4 cursor-pointer" onClick={() => toggleOffcanvas({ value: 'search' })} />

          <FaRegUser
            className="d-none d-md-block fs-4 cursor-pointer"
            onClick={() => handleModalToggle("login", true)}
          />
          <FaRegHeart className="d-none d-md-block fs-4 cursor-pointer" />
          <FiShoppingBag className="fs-4 cursor-pointer"onClick={() => toggleOffcanvas({ value: 'cart' })} />
        </div>

      </nav>

       {/* Offcanvas component */}
       <Offcanvas show={showOffcanvas} onHide={() => toggleOffcanvas({ value: 'menu' })} placement="start">
       <Offcanvas.Header closeButton className="d-block">
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Add the vertical navbar or any content you want in the offcanvas */}
          <VerticalNavbar />
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas 
        className="custom-offcanvas"
        show={showSearchBar} onHide={() => toggleOffcanvas({ value: 'search' })} placement="end">
       <Offcanvas.Header closeButton >
        <Offcanvas.Title ><h3>Search our site</h3></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
          <SearchNav />
        </Offcanvas.Body>
      </Offcanvas>


      <Offcanvas 
        className="custom-offcanvas"
        show={showCart} onHide={() => toggleOffcanvas({ value: 'cart' })} placement="end">
       <Offcanvas.Header closeButton >
        <Offcanvas.Title ><h3>Shopping cart</h3></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartNav />
        </Offcanvas.Body>
      </Offcanvas>

      {/* Modals */}
      <Login
        show={modalState.login}
        handleClose={() => handleModalToggle("login", false)}
        handleShowSignupModal={() => {
          handleModalToggle("login", false);
          handleModalToggle("signup", true);
        }}
        handleShowResetPwdModal={() => {
          handleModalToggle("login", false);
          handleModalToggle("resetPwd", true);
        }}
      />

      <SignUp
        show={modalState.signup}
        handleClose={() => handleModalToggle("signup", false)}
        handleShowLoginModal={() => {
          handleModalToggle("signup", false);
          handleModalToggle("login", true);
        }}
      />

      <ResetPwd
        show={modalState.resetPwd}
        handleClose={() => handleModalToggle("resetPwd", false)}
        handleShowLoginModal={() => {
          handleModalToggle("resetPwd", false);
          handleModalToggle("login", true);
        }}
      />

      {/* <VerticalNavbar/> */}
    </>

  );
};

export default Navbar;