import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

import NavDropdown from "react-bootstrap/NavDropdown";
import "./css/UtilityBar.css";

const UtilityBar = () => {
  return (
    <section className="d-flex py-3 px-5 px-lg-4 py-lg-2 justify-content-between align-items-center fw-semibold position-relative ">
      <div className="d-none d-lg-flex gap-3">
        <FaFacebookF className="icon-circle" size={30} />
        <FaTwitter className="icon-circle"  size={30}/>
        <FaInstagram className="icon-circle" size={30} />
        <FaTiktok className="icon-circle"  size={30}/>
        <FaPinterest className="icon-circle" size={30} />
      </div>
      <div className="lg-px-3 lg-me-5 text-center center-element ">
        Spring Fashion Sale{" "}
        <span className="fw-semibold text-danger text-decoration-underline span-special">
          Shop now <LuArrowUpRight />
        </span>
      </div>
      <div className="d-none d-lg-flex px-3 mx-3 gap-4 align-items-center">
        <NavDropdown title="USD" id="basic-nav-dropdown">
          <img src="..\assets\united-states-flag-icon.svg" alt="" />
          <NavDropdown.Item href="#action/3.1">INR</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">RUBLE</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">RENMINBI</NavDropdown.Item>
          {/* no need now  */}
          {/* <NavDropdown.Divider /><NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </NavDropdown>

        <NavDropdown title="Eng" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Hindi</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Gujarati</NavDropdown.Item>
        </NavDropdown>
      </div>
    </section>
  );
};

export default UtilityBar;
