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
                    <p>Image 1</p>
                    <img class='image' src={placeholder_image} alt='placeholder_image' />
                </section>
                <section>
                    <p>Image 2</p>
                    <img class='image' src={placeholder_image} alt='placeholder_image' />
                </section>
                <section>
                    <p>Image 3</p>
                    <img class='image' src={placeholder_image} alt='placeholder_image' />
                </section>
            </div>
        </div>
    );
}

export default Portfolio;