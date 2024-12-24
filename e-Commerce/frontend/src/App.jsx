import React from 'react';
import './App.css';
import UtilityBar from './components/Navbar/UtilityBar';
import Hero from './components/HeroSection/Hero.componet';
import ShopByCategory from './components/Category/ShopByCategory.component';
import BestSeller from './components/BestSeller/BestSeller.component';
import ShopLook from './components/ShopLook/ShopLook.component';
import Testimonials from './components/Feedback/Testimonials.component';
import Brands from './components/ShopLook/Brands.component';
import ShopGram from './components/ShopGram/ShopGram.component';
import Footer from './components/Footer/Footer.component';

function App() {
  return (
    <div>
      <UtilityBar />
      <Hero />
      <ShopByCategory />
      <BestSeller />
      <ShopLook />
      <Testimonials />
      <Brands />
      <ShopGram />
      <Footer />
    </div>
  );
}

export default App;
