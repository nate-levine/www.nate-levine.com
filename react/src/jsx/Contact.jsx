import React from 'react';
import Footer from './Footer.jsx';
import Section from './Section.jsx';
import Popbox from './Popbox.jsx';
import Typing from './Typing.jsx';

import CurveH from './Curves/CurveH.jsx';

import Cookies from '../../../node_modules/js-cookie'

let Contact = () => {

    const color1 = Cookies.get('color1');
    const color2 = Cookies.get('color2');
    const color3 = Cookies.get('color3');

    return(
        <div className='contact'>
            <div className='curves'>  
                <CurveH width='100vw' left='0vw' top='475.5vh' thickness='2vw' colors={[color1, color2, color3]} />
            </div>
            <div className='content'>
                <Section height='10vh' orientation='left' backgroundColor='#e9e0d6' />
                <Typing fontSize='15vw' height='30.5vh' stopBlink={ true } text='Contact.' />
                <div style={{ position: 'absolute' }}>
                    <a href="mailto:n8levine11@gmail.com">
                        <Typing fontSize='7vw' height='5vh' delay={ 1500 } stopBlink={ true }  text='n8levine11@gmail.com' />
                    </a>
                    <div style={{ height: '30vh' }}></div>
                    <a href="https://www.linkedin.com/in/nate-levine-/">
                    <Typing fontSize='6vw' height='15vh' delay={ 5000 } stopBlink={ false }  text='linkedin.com/in/nate-levine-' />
                    </a>
                </div>
                <Section height='45vh' orientation='left' backgroundColor='transparent' />
                <Section height='10vh' orientation='left' backgroundColor='#f0e8de' />
                <Footer />
            </div>
        </div>
    );
}

export default Contact;