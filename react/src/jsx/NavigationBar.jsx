import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavigationBar.css'

let NavigationBar = () => {
    return(
        <div class='navbar'>
            <div>
                <p class='mark'>nate-levine.com</p>
            </div>
            <ul>
                <li><Link  class='navlink' to='/'>About</Link></li>
                <li><Link  class='navlink' to='/portfolio'>Portfolio</Link></li>
                <li><Link  class='navlink' to='/contact'>Contact</Link></li>
            </ul>
        </div>
    );
}

export default NavigationBar;