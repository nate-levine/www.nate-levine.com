import React, { useEffect } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
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
                <CurveV height='30vh' left='80vw' top='56.8px' thickness='25px' colors={[color1, color2, color3]} />
                <CurveBR width='300px' height='25vh' left='calc(80vw - 225px)' top='110.25vh' thickness='25px' radius='50px' colors={[color1, color2, color3]} />
                <CurveBL width='100px' height='12.5vh' left='calc(80vw - 325.2px)' top='122.75vh' thickness='25px' radius='50px' colors={[color1, color2, color3]} />
                <CurveTR width='calc(80vw - 250.5px)' height='12.5vh' left='0' top='110.25vh' thickness='25px' radius='50px' colors={[color3, color2, color1]} />
            </div>
            <div className='content'>
                <Header />
                <Typing fontSize='15vw' text='Portfolio.' />
                <Section orientation='left' backgroundColor='#f0e8de' title='Key and Deadbolt Assembly' subtitle='SolidWorks Course Project'
                    text='This SolidWorks assembly was my final course evaluation for an introductory Computer Aided Design course. Over the course of a month I designed parts, assembled them together, and created the appropriate drawings for them including an exploded view. Click to find a download link for the entire project folder.' 
                image={ assemblyBOM } />
                <Section orientation='right' backgroundColor='transparent' title='Daniels Door Jam' subtitle='3D Printed Doorstop'
                    text='This project was though up by another student and I to solve a common problem student were having in our dorm hall. We deisgned, manufactured, prototyped, tested, iterated, and gave away copies of this Door Stop to people who wanted one. Click to see a video of the Door Jam in action.' 
                image={ doorStopPoster } />
                <Section orientation='left' backgroundColor='#f0e8de' title='Easy Paddle' subtitle='Makerspace Project'
                    text='This project is a gag gift and my first big manufacturing project. Utilizing my High School Makerspace, I designed and built a ping pong paddle completely from scratch. This allowed me to learn how to use various hand tools, manufacturing equipment, machinery, and softwares.' 
                image={ easyPaddle } />
                <Footer />
            </div>
        </div>
    );
}

export default Portfolio;