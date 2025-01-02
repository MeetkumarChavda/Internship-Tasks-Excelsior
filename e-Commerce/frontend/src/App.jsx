// import React from 'react';
import './App.css';

import Home from './pages/Home';
import { Routes, Route, } from "react-router-dom";
// import WishList from './pages/wishList';

import UtilityBar from './components/Navbar/UtilityBar';


import Footer from './components/Footer/Footer.component';
import DontMiss from './components/modal/DontMiss.component';
// import AdminHeroForm from './pages/AdminHeroForm';
import AdminPanel from './pages/AdminPanel';
// import Navbar from './components/Navbar/Navbar.component';


function App() {
  return (
    <div>
      
       <Routes>
          <Route path = '/' element= {<><UtilityBar /><Home /><DontMiss /> <Footer /></>} />
          <Route path = '/admin' element= {<AdminPanel />} />
       </Routes>
      
    </div>
  );
}

export default App;
