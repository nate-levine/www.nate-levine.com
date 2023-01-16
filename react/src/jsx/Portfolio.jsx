import React from 'react';
import Section from './Section.jsx';
import Typing from './Typing.jsx';

import CurveV from './Curves/CurveV.jsx';
import CurveBR from './Curves/CurveBR.jsx';
import CurveBL from './Curves/CurveBL.jsx';
import CurveTR from './Curves/CurveTR.jsx';

import assemblyBOM from '../media/Assembly_BOM_PNG.png';
import doorStopPoster from '../media/Doorstop_Poster_PNG.png';
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
                <CurveBR width='15vw' height='25vh' left='66vw' top='273.7vh' thickness='2vw' radius='4vw' colors={[color1, color2, color3]} />
                <CurveBL width='12vw' height='12.5vh' left='54vw' top='286.2vh' thickness='2vw' radius='4vw' colors={[color1, color2, color3]} />
                <CurveTR width='60vw' height='12.5vh' left='0vw' top='273.7vh' thickness='2vw' radius='4vw' colors={[color3, color2, color1]} />
            </div>
            <div className='content'>
                <Section height='10vh' orientation='left' backgroundColor='#e9e0d6' />
                <Typing fontSize='15vw' height='28.5vh' text='Portfolio.' />
                <Section height='75vh' orientation='left' backgroundColor='#f0e8de' title='Key and Deadbolt Assembly' subtitle='SolidWorks Course Project'
                    text='This SolidWorks assembly was my final course evaluation for a Computer Aided Design course. In a month I designed parts, made an assembly, and created the appropriate drawings for everything including an exploded view. Click below find a download link for the entire project folder.' 
                link='Download >>>' url='https://drive.google.com/drive/folders/1F1zmKdnT-sINFr2-r6idrlq-SO6UBFSw?usp=share_link' image={ assemblyBOM } />
                <Section height='75vh' orientation='right' backgroundColor='transparent' title='Daniels Door Jam' subtitle='3D Printed Doorstop'
                    text='This project was thought up by another student and I to solve a common problem students were having in our dorm hall. We designed, manufactured, prototyped, tested, iterated on, and gave away copies of this Door Stop to people who wanted one. Click below see a video of the Door Jam in action.' 
                link='View More >>>' url='https://youtu.be/kev0uBcHKio'  image={ doorStopPoster } />
                <Section height='75vh' orientation='left' backgroundColor='#f0e8de' title='Easy Paddle' subtitle='Makerspace Project'
                    text='This project was my first big manufacturing project. Utilizing my high school makerspace, I designed and built a ping pong paddle with a pressure activated speaker from scratch. This project was valuble, in that it allowed me to learn how to use various hand tools, manufacturing machines, and softwares.' 
                image={ easyPaddle } />
            </div>
        </div>
    );
}

export default Portfolio;