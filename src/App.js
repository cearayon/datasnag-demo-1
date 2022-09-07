import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Landing from './Pages/Landing';
import Results from './Pages/Results';
import {Routes, Route} from 'react-router-dom'
const axios = require('axios')





function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/results" element={<Results />} />
      </Routes>
      
    </div>
  );
}

export default App;
