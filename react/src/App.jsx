import About from './About.jsx';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact.jsx';
import Portfolio from './Portfolio.jsx';
import React from 'react';

export default () => (
  <Router>
    <Routes>
      <Route exact path='/' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </Router>
);