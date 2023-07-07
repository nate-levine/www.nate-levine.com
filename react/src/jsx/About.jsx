import React from 'react';
import Header from './Header.jsx';
import Section from './Section.jsx';
import Popbox from './Popbox.jsx';
import Typing from './Typing.jsx';

import CurveBL from './Curves/CurveBL.jsx';
import CurveBR from './Curves/CurveBR.jsx';
import CurveTL from './Curves/CurveTL.jsx';
import CurveTR from './Curves/CurveTR.jsx';
import CurveH from './Curves/CurveH.jsx';
import CurveV from './Curves/CurveV.jsx';

import wpiLOGO from '../media/wpi-logo-white.webp';

import Cookies from '../../../node_modules/js-cookie'

let About = () => {

    const color1 = Cookies.get('color1');
    const color2 = Cookies.get('color2');
    const color3 = Cookies.get('color3');

    return(
        <div className='about'>
            <div className='curves'>
                <CurveTR width='13vw' height='50vh' left='68vw' top='85vh' thickness='2vw' radius='4vw' colors={[color1, color2, color3]} />
                <CurveBL width='43.9vw' height='25vh' left='55vw' top='104.9vh' thickness='2vw' radius='4vw' colors={[color1, color2, color3]} />
                <CurveTL width='13vw' height='20vh' left='55vw' top='85vh' thickness='2vw' radius='4vw' colors={[color1, color2, color3]} />
                <CurveV height='30.2vh' left='75vw' top='129.95vh' thickness='2vw' radius='4vw' colors={[color1, color2, color3]} />
            </div>
            <div className='content'>
                <Header />
                <Popbox width='50vw' height='10vh' left='1vw' top='37vh' color={[color1]} delay='0s' duration='0.5s' title="I'm a Junior at Worcester Polytechnic Institute." /> 
                <Popbox width='30vw' height='10vh' left='1vw' top='90vh' color={[color2]} delay='0.4s' duration='0.5s' title='Web Development &' /> 
                <Popbox width='30vw' height='10vh' left='10vw' top='100vh' color={[color3]} delay='0s' duration='0.5s' title='Graphics Programming' />
                <Popbox width='12vw' height='10vh' left='2vw' top='125vh' color={[color1]} delay='0s' duration='0.5s' title='Cooking' />
                <Popbox width='11vw' height='10vh' left='11vw' top='145vh' color={['#000000']} textColor='#ffffff' delay='0s' duration='0.5s' title='Fitness' /> 
                <Typing fontSize='15vw' height='28.5vh' text='Nate Levine.' />
                <div style={{ position: 'absolute', top: '45vh' }}>
                    <img className='wpiLogo' src={ wpiLOGO } />
                </div>
                <div className='section' style={{ height:'50vh', backgroundColor: '#f0e8de' }}>
                <Popbox width='45vw' height='9vh' left='50vw' top='52vh' color={['#000000']} textColor='#ffffff' delay='0.2s' duration='0.5s' title='pursuing a B.S. in Mechanical Engineering' /> 
                    <h3 style={{ position: 'absolute', left: '50vw', top: '64vh', margin: 0 }}>Creating something is much more engaging when I understand how it works.</h3>
                    <h3 style={{ position: 'absolute', left: '50vw', top: '69vh', margin: 0 }}>Reverse engineering a task can be just as fascinating.</h3>
                </div>
                <div className='section' style={{ height:'75vh', backgroundColor: 'transparent' }}>
                    <h3 style={{ position: 'absolute', width: '40vw', left: '10vw', top: '112vh', margin: 0 }}>Although I study mechanical engineering, software engineering is just as interesting.</h3>
                    <h3 style={{ position: 'absolute', width: '35vw', left: '15vw', top: '125vh', margin: 0 }}>is more than a life skill. Understanding and applying the chemistry behind what makes good food is a constant goal for me.</h3>
                    <h3 style={{ position: 'absolute', width: '40vw', left: '23vw', top: '150vh', margin: 0 }}>Going to the gym, going for a run, or playing pickup basketball is an essential. It keeps me relaxed and focused daily.</h3>
                </div>
            </div>
        </div>
    );
}

export default About;