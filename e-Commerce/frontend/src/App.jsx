import React from 'react';
import './App.css';
import UtilityBar from './components/UtilityBar';
import Hero from './components/Hero.componet';
import ShopByCategory from './components/ShopByCategory.component';
import BestSeller from './components/BestSeller.component';
import ShopLook from './components/ShopLook.component';

function App() {
  return (
    <div>
      <UtilityBar />
      <Hero />
      <ShopByCategory />
      <BestSeller />
      <ShopLook />
      
    </div>
  );
}

export default App;
