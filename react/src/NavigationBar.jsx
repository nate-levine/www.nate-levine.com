import React from 'react';
import { Link } from 'react-router-dom';

let NavigationBar = () => {
    return(
        <div>
            <Link to='/'>About</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
}

export default NavigationBar;