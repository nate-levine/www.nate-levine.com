import Homepage from './Homepage.jsx';
import SuperSecret from './SuperSecret.jsx';

import '../scss/App.scss';

import Cookies from '../../../node_modules/js-cookie'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

Cookies.set('color1', '#ffa500');
Cookies.set('color2', '#d85730');
Cookies.set('color3', '#5a85c3');

export default () => (
  <Router>
    <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route exact path='/supersecret' element={<SuperSecret />} />
    </Routes>
  </Router>
);