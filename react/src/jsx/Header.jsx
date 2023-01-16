import React from 'react';
import { Link, useLocation } from 'react-router-dom';

let Header = () => {

    const location = useLocation();
    
    let aboutButton;
    if (location.pathname === '/') {
        aboutButton = 
            <button type="button" onClick={() => 
                window.scroll({
                    top: document.getElementById('aboutWrapper').offsetTop,
                    behavior: 'smooth'
                })}>About</button>
    } else {
        aboutButton =
            <Link to='/' onClick={() =>
                setTimeout(() => {
                    console.log('test')
                    window.scroll({
                        top: document.getElementById('aboutWrapper').offsetTop,
                    })
                
                }, 0)
            }>About</Link>
    }

    let portfolioButton;
    if (location.pathname === '/') {
        portfolioButton = 
            <button type="button" onClick={() =>
                window.scroll({
                    top: document.getElementById('portfolioWrapper').offsetTop,
                    behavior: 'smooth'
                })}>Portfolio</button>
    } else {
        portfolioButton =
            <Link to='/' onClick={() =>
                setTimeout(() => {
                    console.log('test')
                    window.scroll({
                        top: document.getElementById('portfolioWrapper').offsetTop,
                    })
                
                }, 0)
            }>Portfolio</Link>
    }

    let contactButton;
    if (location.pathname === '/') {
        contactButton = 
            <button type="button" onClick={() => 
                window.scroll({
                    top: document.getElementById('contactWrapper').offsetTop,
                    behavior: 'smooth'
                })}>Contact</button>
    } else {
        contactButton =
            <Link to='/' onClick={() =>
                setTimeout(() => {
                    console.log('test')
                    window.scroll({
                        top: document.getElementById('contactWrapper').offsetTop,
                    })
                
                }, 0)
            }>Contact</Link>
    }
    let superSecretButton;
    if (location.pathname === '/') {
        superSecretButton =
            <Link to='/supersecret'>nate-levine.com</Link>
    } else {
        superSecretButton = '';
    }

    return(
        <div className='header'>
            <ul>
                <li>{ aboutButton }</li>
                <li>{ portfolioButton }</li>
                <li>{ contactButton }</li>
                <li className='superSecretButton'>{ superSecretButton }</li>
            </ul>
        </div>
    );
}

export default Header;