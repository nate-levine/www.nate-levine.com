import React from 'react';
import About from './About.jsx'
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'

let Homepage = () => {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // true for mobile device
        alert("It seems that you're viewing this website on a mobile device. Check out this website on a computer for a better viewing experience.");
    }

    return(
        <div className='homepage'>
            <div id='aboutWrapper'>
                <About />
            </div>
            <div id='portfolioWrapper'>
                <Portfolio />
            </div>
            <div id='contactWrapper'>
                <Contact />
            </div>
        </div>
    );
}

export default Homepage;