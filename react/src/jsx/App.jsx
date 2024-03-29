import Homepage from './Homepage.jsx';
import SuperSecret from './SuperSecret.jsx';

import '../scss/App.scss';

import Cookies from '../../../node_modules/js-cookie'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

Cookies.set('color1', '#ffb41f');
Cookies.set('color2', '#ff9000');
Cookies.set('color3', '#ee524c');

export default () => (
  <Router>
    <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route exact path='/supersecret' element={<SuperSecret />} />
    </Routes>
  </Router>
);