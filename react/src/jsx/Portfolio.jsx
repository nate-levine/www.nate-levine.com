import React from 'react';
import NavigationBar from './NavigationBar';
import '../css/Portfolio.css'
import placeholder_image from '../media/16-9_placeholder.png';

let Portfolio = () => {
    return(
        <div>
            <NavigationBar />
            <div class='container'>
                <section>
                    <p>Scroll To the Right</p>
                </section>
                <section>
                    <p>Easy Paddle</p>
                    <p class='subtext'>A pressure sensitive paddle manufactured using my high school's Makerspace</p>
                    <img class='image' src={placeholder_image} alt='placeholder_image' />
                </section>
                <section>
                    <p>Daniels Doorjam</p>
                    <p class='subtext'>A 3D printed doorstop designed by my roomate and I to solve a common problem</p>
                    <img class='image' src={placeholder_image} alt='placeholder_image' />
                </section>
                <section>
                    <p>Key and Deadbolt Assembly</p>
                    <p class='subtext'>A key a deadboly mechanism I designed for a CAD course final project</p>
                    <img class='image' src={placeholder_image} alt='placeholder_image' />
                </section>
            </div>
        </div>
    );
}

export default Portfolio;