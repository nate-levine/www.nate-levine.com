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
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }
    useEffect(() => {
        let colorPicker1 = new iro.ColorPicker('#picker1', {
            width: 100,
            color: Cookies.get('color1'),
            borderWidth: 10,
            borderColor: color1,
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
            width: 100,
            color: Cookies.get('color2'),
            borderWidth: 10,
            borderColor: Cookies.get('color2'),
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
            width: 100,
            color: Cookies.get('color3'),
            borderWidth: 10,
            borderColor: Cookies.get('color3'),
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
            <CurveTR width='53vw' height='25vh' left='0' top='35vh' thickness='2vw' radius='4vw' colors={[color3, color2, color1]} />
            <CurveBR width='7vw' height='8.45vh' left='42vw' top='60vh' thickness='2vw' radius='4vw' colors={[color3]} />
            <CurveTL width='4vw' height='14vh' left='38vw' top='66.45vh' thickness='2vw' radius='4vw' colors={[color3]} />
            <CurveV height='21vh' left='49vw' top='60vh' thickness='2vw' radius='4vw' colors={[color2]} />
            <CurveBL width='7vw' height='10vh' left='51.05vw' top='60vh' thickness='2vw' radius='4vw' colors={[color1]} />
            <CurveTR width='4vw' height='14vh' left='58.1vw' top='66.45vh' thickness='2vw' radius='4vw' colors={[color1]} />
            <CurveBL width='4vw' height='10vh' left='38vw' top='101vh' thickness='2vw' radius='4vw' colors={[color3]} />
            <CurveTR width='6.95vw' height='10vh' left='42vw' top='107.5vh' thickness='2vw' radius='4vw' colors={[color3]} />
            <CurveV height='16.6vh' left='49vw' top='101vh' thickness='2vw' radius='4vw' colors={[color2]} />
            <CurveBR width='4vw' height='10vh' left='58vw' top='101vh' thickness='2vw' radius='4vw' colors={[color1]} />
            <CurveTL width='7vw' height='10vh' left='51.05vw' top='107.5vh' thickness='2vw' radius='4vw' colors={[color1]} />
            <CurveBL width='20vw' height='67.2vh' left='47vw' top='117vh' thickness='2vw' radius='4vw' colors={[color1, color2, color3]} />

            <Header />
            <Typing fontSize='14.5vw' text='Super Secret.' />
            <Section orientation='left' backgroundColor='transparent' />
            <Section orientation='left' backgroundColor='transparent' />
            <div className='pickers'>
                <div id='picker3'></div>
                <div id='picker2'></div>
                <div id='picker1'></div>
            </div>
            <Footer />
        </div>
    );
}

export default SuperSecret;