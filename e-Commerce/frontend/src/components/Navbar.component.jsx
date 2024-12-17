import logo from '../assets/logo.svg';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { HiMenuAlt2 } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { FaRegUser, FaRegHeart } from "react-icons/fa";


const Navbar = () => {
  return (
         <nav className='w-100 position-absolute z-1 d-flex py-2 py-lg-4 mt-1 px-3 justify-content-between align-items-center top-0'>
            <HiMenuAlt2 className='d-lg-none fs-2'/>
            <div className='ms-4 ms-lg-2'>
                <img src={logo} alt="logo" />
            </div>
            <div className='d-none d-lg-flex gap-4'>
            <NavDropdown title="Home" id="basic-nav-dropdown" className='fw-semibold'>
                <NavDropdown.Item href="#home-intro">Introduction</NavDropdown.Item>
                <NavDropdown.Item href="#home-about">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#home-contact">Contact</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Shop" id="basic-nav-dropdown" className='fw-semibold'>
                <NavDropdown.Item href="#shop-men">Men's Collection</NavDropdown.Item>
                <NavDropdown.Item href="#shop-women">Women's Collection</NavDropdown.Item>
                <NavDropdown.Item href="#shop-sale">Sale Items</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Product" id="basic-nav-dropdown"className='fw-semibold'>
                <NavDropdown.Item href="#product-new">New Arrivals</NavDropdown.Item>
                <NavDropdown.Item href="#product-featured">Featured Products</NavDropdown.Item>
                <NavDropdown.Item href="#product-categories">Categories</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Pages" id="basic-nav-dropdown"className='fw-semibold'>
                <NavDropdown.Item href="#pages-faq">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="#pages-testimonials">Testimonials</NavDropdown.Item>
                <NavDropdown.Item href="#pages-terms">Terms & Conditions</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Blog" id="basic-nav-dropdown" className='fw-semibold'>
                <NavDropdown.Item href="#blog-latest">Latest Posts</NavDropdown.Item>
                <NavDropdown.Item href="#blog-guides">Style Guides</NavDropdown.Item>
                <NavDropdown.Item href="#blog-news">News</NavDropdown.Item>
            </NavDropdown>
            
             <div className='fw-semibold'>
                Buy Now
             </div>

            </div>
            <div className='d-flex gap-3 me-lg-4'>
                <FaSearch className='fs-4'/>
                <FaRegUser className='d-none d-md-block fs-4'/>
                <FaRegHeart className='d-none d-md-block fs-4' />
                <FiShoppingBag className='fs-4'/>
            </div>
        </nav>
  )
}

export default Navbar