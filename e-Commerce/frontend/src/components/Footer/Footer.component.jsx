import logo from "../../assets/logo.svg";
import { GoArrowUpRight } from "react-icons/go";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";
import { FaPlus } from "react-icons/fa";
import "../css/Footer.css";

const cards = [
  { img: "src/assets/visa.png", name: "visa" },
  { img: "src/assets/img-1.png", name: "paypal" },
  { img: "src/assets/img-2.png", name: "mastercard" },
  { img: "src/assets/img-3.png", name: "amex" },
  { img: "src/assets/img-4.png", name: "discover" },
];

const Footer = () => {
  return (
    <section className="overflow-hidden">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="px-4">
            <img
              src={logo}
              alt="Logo"
              className="logo-footer"
              style={{ width: "200px", height: "auto" }}
            />
          </div>
          <div className="mt-4 px-4">
            <p className="fs-6 fs-sm-5 fs-md-4 fs-lg-3">
              Address: 1234 Fashion Street, Suite 576 <br />
              New York, NY 10001 <br />
              Email: info@fashiopnshop.com <br />
              Phone: (213) 555-1234 <br />
            </p>
          </div>
          <div className="px-4">
            <h5
              className="d-inline-flex gap-3 align-items-center"
              style={{
                borderBottom: "2px solid #000", // Add a border-bottom
                paddingBottom: "0.2rem", // Adjust padding for spacing between text and border
              }}
            >
              Get direction
              <span style={{ fontSize: "1.5rem" }}>
                <GoArrowUpRight size={"25px"} />
              </span>
            </h5>
          </div>
          <div>
            <div className="d-flex gap-3 py-3 px-4">
              <FaFacebookF className="icon-circle" />
              <FaTwitter className="icon-circle" />
              <FaInstagram className="icon-circle" />
              <FaTiktok className="icon-circle" />
              <FaPinterest className="icon-circle" />
            </div>
          </div>
        </div>
        <div className="d-none d-md-block col-md-6 col-lg-3 ">
          <div className="line-space px-4">
            <h4>Help</h4>
            <p>Privacy Policy</p>
            <p>Returns + Exchanges</p>
            <p>Shipping</p>
            <p>Terms & Conditions</p>
            <p>FAQ's</p>
            <p>Compare</p>
            <p>My Wishlist</p>
          </div>
        </div>
        <div className="d-none d-md-block col-md-6 col-lg-3">
          <div className="line-space p-4">
            <h4 className="pb-4">About Us</h4>
            <p>Our Story</p>
            <p>Visit Our Store</p>
            <p>Contact Us</p>
            <p>Account</p>
          </div>
        </div>
        <div className="d-none d-md-block col-md-6 col-lg-3">
          <div className="p-4">
                <h4 className="pb-3">Sign Up for Email</h4>
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
        </div>
      </div>

      <div className="p-3 d-md-none">
        <Accordion alwaysOpen className="w-100">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <strong>Help</strong>
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
              <strong>About Us</strong>
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
              <strong>Sign Up for Email</strong>
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
        </Accordion>
        <hr />
      </div>
      <div className="d-md-flex justify-content-between px-2 py-3 ">
        <p className="text-center text-gray-300 ms-4">
          &copy; 2022 Ecomus Store. All rights reserved.
        </p>
        <div className="d-flex justify-content-between px-5 pb-5 gap-md-3">
          {cards &&
            cards.map((card, index) => (
              <img key={index} src={card.img} alt={card.name} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
