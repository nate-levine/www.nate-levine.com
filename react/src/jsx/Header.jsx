import React from 'react';
import { Link } from 'react-router-dom';

let Header = () => {
    return(
        <div className='header'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li className='supersecret'><Link to='/supersecret'>nate-levine.com</Link></li>
            </ul>
        </div>
    );
}

export default Header;