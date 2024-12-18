import React from 'react';
import './App.css';
import UtilityBar from './components/UtilityBar';
import Hero from './components/Hero.componet';
import ShopByCategory from './components/ShopByCategory.component';

function App() {
  return (
    <div>
      <UtilityBar />
      <Hero />
      <ShopByCategory />
      
    </div>
  );
}

export default App;
