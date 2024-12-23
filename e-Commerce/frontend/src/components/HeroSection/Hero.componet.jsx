import "../css/Hero.css";
import Navbar from '../Navbar/Navbar.component'
import Marquee from './Marquee.component';
import Carousel from 'react-bootstrap/Carousel';
import fashionImage1 from "../../assets/fashion-slideshow-01.jpg";
import fashionImage2 from "../../assets/fashion-slideshow-02.jpg";
import fashionImage3 from "../../assets/fashion-slideshow-03.jpg";

import { FaAngleRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className='hero-section position-relative'>   
    <Navbar />
    <div className="overlay-text-left text-white">
        <div className="mb-5">
            <h1 className="display-1 text-dark">Glamorous<br />Glam</h1>
            <p className="d-none d-md-block mt-2 text-para text-muted">
                From casual to formal, we've got you covered.
            </p>
            <button className="btn text-white btn-lg mt-4 bg-black" >
                Shop collection <FaAngleRight />
            </button>
        </div>
    </div>
    <Carousel className='carousel ' controls={false} indicators={true} interval={2000}>    
        <Carousel.Item>
            <img className='object-fit-cover w-100 h-100' src={fashionImage1} alt="Fashion Slideshow 1" />
        </Carousel.Item>
        <Carousel.Item>
            <img className='object-fit-cover w-100 h-100' src={fashionImage2} alt="Fashion Slideshow 2" />
        </Carousel.Item>
        <Carousel.Item>
            <img className='object-fit-cover w-100 h-100' src={fashionImage3} alt="Fashion Slideshow 3" />
        </Carousel.Item>
    </Carousel>
    
    <Marquee dataText='Spring Clearance Event: Save Up to 70%'/>
    
    </section>
    
    
  )
}

export default Hero