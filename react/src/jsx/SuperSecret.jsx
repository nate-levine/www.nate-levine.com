import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Typing from './Typing.jsx';
import Section from './Section.jsx';

import CurveTR from './Curves/CurveTR.jsx';
import CurveBR from './Curves/CurveBR.jsx';
import CurveTL from './Curves/CurveTL.jsx';
import CurveBL from './Curves/CurveBL.jsx';
import CurveV from './Curves/CurveV.jsx';

import iro from '@jaames/iro'
import Cookies from '../../../node_modules/js-cookie'

let SuperSecret = () => {

    const [color1, setColor1] = useState(Cookies.get('color1'));
    const [color2, setColor2] = useState(Cookies.get('color2'));
    const [color3, setColor3] = useState(Cookies.get('color3'));

    useEffect(() => {
        let colorPicker1 = new iro.ColorPicker('#picker1', {
            width: (window.innerWidth / 12),
            color: Cookies.get('color1'),
            borderWidth: (window.innerWidth / 100),
            borderColor: color1,
            colors: [
                'rgb(100%, 100%, 100%)',
            ],
            layout: [
                {
                    component: iro.ui.Wheel,
                },
            ]
        });
            colorPicker1.on('color:change', (color) => {
            Cookies.remove('color1');
            Cookies.set('color1', color.hexString);
            setColor1(Cookies.get('color1'));

            document.getElementById('picker1')
                .querySelector('.IroColorPicker')
                .querySelector('.IroWheel')
                .querySelector('.IroWheelBorder').style.border = `10px solid ${Cookies.get('color1')}`;
        });

        let colorPicker2 = new iro.ColorPicker('#picker2', {
            width: (window.innerWidth / 12),
            color: Cookies.get('color2'),
            borderWidth: (window.innerWidth / 100),
            borderColor: Cookies.get('color2'),
            colors: [
                'rgb(100%, 100%, 100%)',
            ],
            layout: [
                {
                    component: iro.ui.Wheel,
                },
            ]
        });
        colorPicker2.on('color:change', (color) => {
            Cookies.remove('color2');
            Cookies.set('color2', color.hexString);
            setColor2(Cookies.get('color2'));

            document.getElementById('picker2')
                .querySelector('.IroColorPicker')
                .querySelector('.IroWheel')
                .querySelector('.IroWheelBorder').style.border = `10px solid ${Cookies.get('color2')}`;
        });

        let colorPicker3 = new iro.ColorPicker('#picker3', {
            width: (window.innerWidth / 12),
            color: Cookies.get('color3'),
            borderWidth: (window.innerWidth / 100),
            borderColor: Cookies.get('color3'),
            colors: [
                'rgb(100%, 100%, 100%)',
            ],
            layout: [
                {
                    component: iro.ui.Wheel,
                },
            ]
        });
        colorPicker3.on('color:change', (color) => {
            Cookies.remove('color3');
            Cookies.set('color3', color.hexString);
            setColor3(Cookies.get('color3'));

            document.getElementById('picker3')
                .querySelector('.IroColorPicker')
                .querySelector('.IroWheel')
                .querySelector('.IroWheelBorder').style.border = `10px solid ${Cookies.get('color3')}`;
        });
    }, []);

    return(
        <div className='supersecret'>
            <div className='curves'>
                <CurveTR width='53vw' height='39vh' left='0vw' top='35vh' thickness='2vw' radius='4vw' colors={[color3, color2, color1]} />
                <CurveBL width='50vw' height='39vh' left='47vw' top='100vh' thickness='2vw' radius='4vw' colors={[color1, color2, color3]} />
            </div>
            <div className='content'>
                <Header />
                <Typing fontSize='14.5vw' height='28.5vh' text='Super Secret.' />
                <Section height='104vh'  orientation='left' backgroundColor='transparent' />
                <div className='pickers'>
                    <div id='picker3'></div>
                    <div id='picker2'></div>
                    <div id='picker1'></div>
                </div>
                <Section height='10vh' orientation='left' backgroundColor='#f0e8de' />
                <Footer />
            </div>
        </div>
    );
}

export default SuperSecret;