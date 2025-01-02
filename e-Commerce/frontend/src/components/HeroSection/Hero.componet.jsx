import { useState, useEffect } from "react";
import "../css/Hero.css";
import Navbar from '../Navbar/Navbar.component'
import Marquee from './Marquee.component';
import Carousel from 'react-bootstrap/Carousel';
import { FaAngleRight } from "react-icons/fa6";

const Hero = () => {
  const [heroItems, setHeroItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeMarquee, setActiveMarquee] = useState('');

  useEffect(() => {
    fetchHeroContent();
    fetchActiveMarquee();
  }, []);

  const fetchHeroContent = async () => {
    try {
      const response = await fetch('http://localhost:9000/api/admin/getHero');
      const result = await response.json();
      if (result.success) {
        setHeroItems(result.data);
      } else {
        setError('Failed to load hero content');
      }
    } catch (err) {
      setError('Error fetching hero content');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchActiveMarquee = async () => {
    try {
      const response = await fetch('http://localhost:9000/api/admin/getMarquee');
      const result = await response.json();
      if (result.success) {
        const activeMarquee = result.data.find(m => m.isActive);
        setActiveMarquee(activeMarquee ? activeMarquee.marqueeText : '');
      }
    } catch (err) {
      console.error('Error fetching marquee:', err);
    }
  };

  if (isLoading) {
    return <div className="text-center p-5">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger m-3">{error}</div>;
  }

  return (
    <section className='hero-section position-relative'>   
      <Navbar />
      
      <Carousel className='carousel' controls={false} indicators={true} interval={2000}>    
        {heroItems.map((item, index) => (
          <Carousel.Item key={item._id || index}>
            {/* Overlay text for each slide */}
            <div className="overlay-text-left text-white">
              <div className="mb-5">
                <h1 className="display-1 text-dark">{item.heroTitle}</h1>
                <p className="d-none d-md-block mt-2 text-para text-muted">
                  {item.heroPara}
                </p>
                <button className="btn text-white btn-lg mt-4 bg-black">
                  Shop collection <FaAngleRight />
                </button>
              </div>
            </div>
            
            {/* Carousel image */}
            <img 
              className='object-fit-cover w-100 h-100' 
              src={item.heroImage} 
              alt={item.heroTitle}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      
      <Marquee dataText={activeMarquee || 'Spring Clearance Event: Save Up to 70%'}/>
    </section>
  );
};

export default Hero;