import React from 'react';
import Section from './Section.jsx';
import Typing from './Typing.jsx';

import CurveV from './Curves/CurveV.jsx';
import CurveBR from './Curves/CurveBR.jsx';
import CurveBL from './Curves/CurveBL.jsx';
import CurveTR from './Curves/CurveTR.jsx';

import stirlingEngine from '../media/Stirling Engine.png';
import assemblyBOM from '../media/Assembly_BOM_PNG.png';
import doorStopPoster from '../media/Doorstop_Poster_PNG_NO_BORDER.png';
import easyPaddle from '../media/EasyPaddle.png';

import Cookies from '../../../node_modules/js-cookie'

let Portfolio = () => {

    const color1 = Cookies.get('color1');
    const color2 = Cookies.get('color2');
    const color3 = Cookies.get('color3');

    return(
        <div className='portfolio'>
            <div className='curves'>
                <CurveV height='28.5vh' left='75vw' top='170.2vh' thickness='2vw' colors={[color1, color2, color3]} />
                <CurveBR width='15vw' height='25vh' left='66vw' top='208.7vh' thickness='2vw' radius='4vw' colors={[color1, color2, color3]} />
                <CurveBL width='15vw' height='13.5vh' left='54vw' top='220.2vh' thickness='2vw' radius='4vw' colors={[color1, color2, color3]} />
                <CurveTR width='60vw' height='12.5vh' left='0vw' top='208.7vh' thickness='2vw' radius='4vw' colors={[color3, color2, color1]} />
                
                <CurveTR width='45vw' height='20.6vh' left='0vw' top='358.7vh' thickness='2vw' radius='4vw' colors={[color3, color2, color1]} />
                <CurveBL width='59.9vw' height='54.3vh' left='39.0vw' top='379.3vh' thickness='2vw' radius='4vw' colors={[color1, color2, color3]} />
            </div>
            <div className='content'>
                <Section height='10vh' orientation='left' backgroundColor='#e9e0d6' />
                <Typing fontSize='15vw' height='28.5vh' text='Portfolio.' />
                <Section height='10vh' orientation='left' backgroundColor='#f0e8de' title='PLACEHOLDER' subtitle='PLACEHOLDER'
                    text='PLACEHOLDER' 
                link='' url='' />
                <Section height='75vh' orientation='right' backgroundColor='transparent' title='Stirling Engine' subtitle='CNC Machining Project'
                    text='This Stirling engine runs on heat. Each metal component was manufactured using CNC lathing and milling techniques. It was also an opportunity for me to learn computer automated manufacturing software.' 
                link='' url=''  image={ stirlingEngine } rotation={ 1 } />
                <Section height='75vh' orientation='left' backgroundColor='#f0e8de' title='Key and Deadbolt Assembly' subtitle='SolidWorks Course Project'
                    text='This SolidWorks assembly was my final course evaluation for a Computer Aided Design course. I designed components, assembled them, and created the appropriate drawings for everything, including an exploded BOM.' 
                link='Download the project folder >>>' url='https://drive.google.com/drive/folders/1F1zmKdnT-sINFr2-r6idrlq-SO6UBFSw?usp=share_link' image={ assemblyBOM } rotation={ -2 } />
                <Section height='75vh' orientation='right' backgroundColor='transparent' title='Door Jam' subtitle='3D Printed Doorstop'
                    text='This project was a collaboration between another student and I to solve a common problem that students were having in our dorm hall. We designed, manufactured, tested, iterated on, and gave away prototypes of this doorstop to people who wanted one. It holds the door with friction rather than an opposing force.' 
                link='<<< Watch the door jam in action' url='https://youtu.be/kev0uBcHKio'  image={ doorStopPoster } rotation={ 2 } />
                <Section height='75vh' orientation='left' backgroundColor='#f0e8de' title='Easy Paddle' subtitle='Makerspace Project'
                    text='Utilizing my high school makerspace, I designed and manufactured a ping pong paddle with an embedded, pressure activated speaker. This project was valuble, in that I learned how to use various manufacturing machines —additive and subtractive — and design softwares.' 
                image={ easyPaddle } rotation={ -1 } />
            </div>
        </div>
    );
}

export default Portfolio;