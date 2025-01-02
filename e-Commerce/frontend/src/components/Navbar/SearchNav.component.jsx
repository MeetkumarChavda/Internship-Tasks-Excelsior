import React from "react";
import { IoSearch } from "react-icons/io5";


const SearchNav = () => {
  return (
    <section className="d-flex flex-column gap-3 p-2">
      <div className="search-nav-container ms-0">
      <div className="input-group d-flex align-items-center">
        <span className="input-group-text mb-3 ">
          <IoSearch size="20px"  />
        </span>
        <input type="text" className="form-control" placeholder="Search" />
      </div>
    </div>
    <hr />
      <div className="mb-4">
        <h5>Quick link</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#" className="btn p-0 py-1 pt-3 text-decoration-none">
              Fashion
            </a>
          </li>
          <li>
            <a href="#" className="btn p-0 py-1 text-decoration-none">
              Men
            </a>
          </li>
          <li>
            <a href="#" className="btn p-0 py-1 text-decoration-none">
              Women
            </a>
          </li>
          <li>
            <a href="#" className="btn p-0 py-1 text-decoration-none">
              Accessories
            </a>
          </li>
        </ul>
      </div>

      <div className="d-flex flex-column gap-3">
        <h4>Need some inspiration ?</h4>
        <div className="d-flex gap-2">
          <img
            src="src/assets/white-2.jpg"
            style={{ width: "73px" }}
            alt="Mini crossbody bag"
            className="me-3"
          />
          <div>
            <p className="mb-0">Mini crossbody bag</p>
            <p className="mb-0">$18.00</p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <img
            src="src/assets/white-1.jpg"
            style={{ width: "73px" }}
            alt="Mini crossbody bag"
            className="me-3"
          />
          <div>
            <p className="mb-0">Mini crossbody bag</p>
            <p className="mb-0">$18.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchNav;
