import Homepage from './Homepage.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';
import SuperSecret from './SuperSecret.jsx';

import '../scss/App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

export default () => (
  <Router>
    <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route exact path='/portfolio' element={<Portfolio />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/supersecret' element={<SuperSecret />} />
    </Routes>
  </Router>
);