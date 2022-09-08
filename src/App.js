import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Landing from './Pages/Landing';
import Results from './Pages/Results';
import {Routes, Route} from 'react-router-dom'
import Teaser from './Pages/Teaser';
import Checkout from './Pages/Checkout';
import FaceBook from './Pages/FaceBook';
const axios = require('axios')





function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/results" element={<Results />} />
        <Route path="/teaser" element={<Teaser />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/facebook" element={<FaceBook />} />
      </Routes>
      
    </div>
  );
}

export default App;
