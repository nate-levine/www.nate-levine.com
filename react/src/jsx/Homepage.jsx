import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Typing from './Typing.jsx';
import Section from './Section.jsx';
import Popbox from './Popbox.jsx';

import CurveBL from './Curves/CurveBL.jsx';
import CurveBR from './Curves/CurveBR.jsx';
import CurveTL from './Curves/CurveTL.jsx';
import CurveTR from './Curves/CurveTR.jsx';
import CurveH from './Curves/CurveH.jsx';
import CurveV from './Curves/CurveV.jsx';

import Cookies from '../../../node_modules/js-cookie'

import placeholderPNG from '../media/16-9_placeholder.png';
import assemblyBOM from '../media/Assembly_BOM_PNG.png';
import doorStopPoster from '../media/Doorstop_Poster_PNG.png';
import easyPaddle from '../media/EasyPaddle.png';

let Homepage = () => {

    const color1 = Cookies.get('color1');
    const color2 = Cookies.get('color2');
    const color3 = Cookies.get('color3');

    return(
        <div>
            <div className='homepage'>
                <div className='curves'>
                    <CurveBR width='303.5px' height='12.5vh' left='calc(0)' top='100vh' thickness='25px' radius='50px' colors={[color3, color2, color1]} />
                    <CurveTL width='150px' height='12.5vh' left='calc(80vw - 1000px)' top='87.5vh' thickness='25px' radius='50px' colors={[color1, color2, color3]} />
                    <CurveTR width='225.2px' height='25vh' left='calc(80vw - 850.25px)' top='87.5vh' thickness='25px' radius='50px' colors={[color1, color2, color3]} />
                    <CurveBL width='449px' height='125px' left='calc(80vw - 700px)' top='187.5vh' thickness='25px' radius='50px' colors={[color3, color2, color1]} />
                    <CurveTR width='250px' height='53vh' left='calc(80vw - 250px)' top='187.5vh' thickness='25px' radius='50px' colors={[color3, color2, color1]} />
                    <CurveBR width='250px' height='200px' left='calc(80vw - 250px)' top='237.5vh' thickness='25px' radius='50px' colors={[color3, color2, color1]} />
                    <CurveBL width='125px' height='200px' left='calc(80vw - 365px)' top='237.5vh' thickness='25px' radius='50px' colors={[color3, color2, color1]} />
                    <CurveTL width='289.5px' height='200px' left='calc(80vw - 365px)' top='217.5vh' thickness='25px' radius='50px' colors={[color3, color2, color1]} />
                    <CurveH width='19.05%' left='80.95%' top='217.5vh' thickness='25px' colors={[color1, color2, color3]} />
                </div>
                <div className='content'>
                    <Header />
                    <Popbox width='90vw' height='20vh' left='0' top='35vh' color={ color1 } duration='2s' delay='1s' title='Sophomore at Worcester Polytechnic Institute studying Mechanical Engineering' />
                    <Popbox width='40vw' height='25vh' left='55vw' top='60vh' color={ color3 } duration='1s' delay='2s' title='Visit this website on a computer for the best viewing experience' />
                    <Typing fontSize='15vw' text='Nate Levine.' />
                    <Section height='75vh' orientation='left' backgroundColor='transparent' text="Hey, I'm glad you decided to visit my personal website. It's under construction currently, but it should be ready within the next week. In the meantime, feel free to explore to your heart's content." />
                    <Section height='75vh' orientation='right' backgroundColor='#f0e8de' text="This is placeholder text. I'm going to write something down here, probably something important. Unfortunately, I don't know what's important enough to write down here. So right now this is just here to take up space." image={ placeholderPNG } />
                    <Section height='75vh' orientation='left' backgroundColor='transparent' text="Did you know this text is the only thing keeping the width of the website from not going wacko? Yea, CSS is a real pain. Did you find the secret on this website yet? If not, keep looking" />
                    <Section height='25vh' orientation='left' backgroundColor='#e9e0d6' />
                </div>
            </div>
            <div className='portfolio'>
                <div className='curves'>
                    <CurveV height='30vh' left='80vw' top='285.2vh' thickness='25px' colors={[color1, color2, color3]} />
                    <CurveBR width='300px' height='25vh' left='calc(80vw - 225px)' top='388.8vh' thickness='25px' radius='50px' colors={[color1, color2, color3]} />
                    <CurveBL width='100px' height='12.5vh' left='calc(80vw - 325.2px)' top='401.3vh' thickness='25px' radius='50px' colors={[color1, color2, color3]} />
                    <CurveTR width='calc(80vw - 250.5px)' height='12.5vh' left='0' top='388.8vh' thickness='25px' radius='50px' colors={[color3, color2, color1]} />
                </div>
                <div className='content'>
                    <Typing fontSize='15vw' text='Portfolio.' />
                    <Section height='75vh' orientation='left' backgroundColor='#f0e8de' title='Key and Deadbolt Assembly' subtitle='SolidWorks Course Project'
                        text='This SolidWorks assembly was my final course evaluation for an introductory Computer Aided Design course. Over the course of a month I designed parts, assembled them together, and created the appropriate drawings for them including an exploded view. Click to find a download link for the entire project folder.' 
                    image={ assemblyBOM } />
                    <Section height='75vh' orientation='right' backgroundColor='transparent' title='Daniels Door Jam' subtitle='3D Printed Doorstop'
                        text='This project was though up by another student and I to solve a common problem student were having in our dorm hall. We deisgned, manufactured, prototyped, tested, iterated, and gave away copies of this Door Stop to people who wanted one. Click to see a video of the Door Jam in action.' 
                    image={ doorStopPoster } />
                    <Section height='75vh' orientation='left' backgroundColor='#f0e8de' title='Easy Paddle' subtitle='Makerspace Project'
                        text='This project is a gag gift and my first big manufacturing project. Utilizing my High School Makerspace, I designed and built a ping pong paddle completely from scratch. This allowed me to learn how to use various hand tools, manufacturing equipment, machinery, and softwares.' 
                    image={ easyPaddle } />
                </div>
            </div>
            <div className='contact'>
                <div className='content'>
                    <Section height='25vh' orientation='left' backgroundColor='#e9e0d6' />
                    <Typing fontSize='15vw' text='Contact.' />
                    <Section height='75vh' orientation='left' backgroundColor='#f0e8de' />
                    <Section height='75vh' orientation='left' backgroundColor='transparent' />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Homepage;