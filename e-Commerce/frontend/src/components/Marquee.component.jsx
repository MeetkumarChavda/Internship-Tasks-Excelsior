import { motion } from 'framer-motion';
import tIcon from '../assets/e3e9f171-34ff-47a2-991c-7e97e3613ea2.svg';
import './css/Marquee.css';

const Marquee = ({ dataText }) => {
    // Marquee animation settings
    const marqeeText = dataText

  const marqueeVariants = {
    animate: {
      x: [0, '-100%'], // Move content completely off the screen
      transition: {
        x: {
          repeat: Infinity, // Infinite loop
          repeatType: 'loop',
          duration: 20, // Adjust the duration to control speed
          ease: 'linear',
        },
      },
    },
  };

  // Repeating marquee content
  const bannerContent = (
    <>
      <div className="d-flex align-items-center gap-3 flex-nowrap me-5">
        <img src={tIcon} alt="Thunder Icon" className="thunder-icon" />
        <span className="marquee-text">{marqeeText}</span>
      </div>
      <div className="d-flex align-items-center gap-3 flex-nowrap me-5">
        <img src={tIcon} alt="Thunder Icon" className="thunder-icon" />
        <span className="marquee-text">{marqeeText}</span>
      </div>
      <div className="d-flex align-items-center gap-3 flex-nowrap me-5">
        <img src={tIcon} alt="Thunder Icon" className="thunder-icon" />
        <span className="marquee-text">{marqeeText}</span>
      </div>
    </>
  );

  return (
    <div className="marquee-container overflow-hidden bg-light-yellow py-3">
      <motion.div
        className="d-flex flex-nowrap marquee-content"
        variants={marqueeVariants}
        animate="animate"
      >
        {bannerContent}
        {bannerContent} 
      </motion.div>
    </div>
  );
};

export default Marquee;
