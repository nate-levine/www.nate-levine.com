import React, { useEffect } from 'react';
import About from './About.jsx'
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'

let Homepage = () => {

    useEffect(() => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setTimeout(() => {
                alert("It seems that you're viewing this website on a mobile device. Check out this website on a computer for a better viewing experience, while I work on making this website more mobile friendly!");
            }, 3000);
        }
    }, []);

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