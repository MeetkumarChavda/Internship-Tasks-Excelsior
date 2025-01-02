// import React from "react";
// import "../css/Footer.css";
import '../css/VerticalNabar.css';
import { FaPlus } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";
import React, { useState } from 'react';
import { X, Plus, Search, Heart, User } from 'lucide-react';


const VerticalNavbar = ({ closeNavbar }) => {
  return (
    <section>
      <Accordion alwaysOpen className="w-100">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <strong>Home</strong>
            <FaPlus className="ms-auto" />
          </Accordion.Header>
          <Accordion.Body>
            <p>Privacy Policy</p>
            <p>Returns + Exchanges</p>
            <p>Shipping</p>
            <p>Terms & Conditions</p>
            <p>FAQ's</p>
            <p>Compare</p>
            <p>My Wishlist</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <strong>Shop</strong>
            <FaPlus className="ms-auto" />
          </Accordion.Header>
          <Accordion.Body>
            <p>Our Story</p>
            <p>Visit Our Store</p>
            <p>Contact Us</p>
            <p>Account</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <strong>Product</strong>
            <FaPlus className="ms-auto" />
          </Accordion.Header>
          <Accordion.Body>
            <div>
              <p>
                Sign up to get first dibs on new arrivals, sales, <br />
                exclusive content, events, and more!
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="form-control mb-3"
                />
                <button className="btn btn-dark mb-3">Subscribe</button>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="accordion-header">
            <strong>Page</strong>
            <FaPlus className="ms-auto" />
          </Accordion.Header>
          <Accordion.Body>
            <p>Privacy Policy</p>
            <p>Returns + Exchanges</p>
            <p>Shipping</p>
            <p>Terms & Conditions</p>
            <p>FAQ's</p>
            <p>Compare</p>
            <p>My Wishlist</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <strong>Blog</strong>
            <FaPlus className="ms-auto" />
          </Accordion.Header>
          <Accordion.Body>
            <p>Privacy Policy</p>
            <p>Returns + Exchanges</p>
            <p>Shipping</p>
            <p>Terms & Conditions</p>
            <p>FAQ's</p>
            <p>Compare</p>
            <p>My Wishlist</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <strong>Buy now</strong>
            <FaPlus className="ms-auto" />
          </Accordion.Header>
          <Accordion.Body>
            <p>Privacy Policy</p>
            <p>Returns + Exchanges</p>
            <p>Shipping</p>
            <p>Terms & Conditions</p>
            <p>FAQ's</p>
            <p>Compare</p>
            <p>My Wishlist</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
       {/* Buttons */}
       <div className="d-flex gap-2 mt-4">
        <button className="btn btn-custom">
          <Heart /> Wishlist
        </button>
        <button className="btn btn-custom">
          <Search /> Search
        </button>
      </div>

      {/* Help Section */}
      <div className='mt-4'>
        <h3>Need help?</h3>
        <p>Address: 1234 Fashion Street, Suite 567,</p>
        <p>New York, NY 10001</p>
        <p>Email: info@example.com</p>
        <p>Phone: (212) 555-1234</p>
        <button className="btn btn-custom">Contact Us</button>
      </div>

      {/* fixed bottom */}
       {/* Fixed-Top Section */}
       <div className="fixed-bottom p-3 bg-white shadow-sm position-absolute w-100 d-flex justify-content-between">
        <div className="d-flex flex-column justify-content-start align-items-center">
          {/* <div > */}
            {/* Login Button */}
          <button className="btn btn-custom ms-2 w-100">
            <User /> Login
          </button>
          {/* </div> */}


         <div className='d-flex mt-3 gap-5 ms-2'>
           {/* Dropdowns */}
          {/* Currency Dropdown */}
    <div className="dropdown">
      <span
        className="dropdown-toggle text-primary"
        id="usdDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ cursor: "pointer" }}
      >
        USD
      </span>
      <ul className="dropdown-menu" aria-labelledby="usdDropdown">
        <li><a className="dropdown-item" href="#">USD</a></li>
        <li><a className="dropdown-item" href="#">EUR</a></li>
        <li><a className="dropdown-item" href="#">GBP</a></li>
      </ul>
    </div>

    {/* Language Dropdown */}
    <div className="dropdown ms-auto">
      <span
        className="dropdown-toggle text-primary"
        id="englishDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ cursor: "pointer" }}
      >
        English
      </span>
      <ul className="dropdown-menu" aria-labelledby="englishDropdown">
        <li><a className="dropdown-item" href="#">English</a></li>
        <li><a className="dropdown-item" href="#">Spanish</a></li>
        <li><a className="dropdown-item" href="#">French</a></li>
      </ul>
    </div>


         </div>

          
        </div>
      </div>

      
    </section>
  );
};

export default VerticalNavbar;

