import React from 'react';
import NavigationBar from './NavigationBar';
import '../css/About.css'

let About = () => {
    return(
        <div>
            <NavigationBar />
            <div>
                <div style={{ color: '#ff0000' }}>
                    <h1>NOTE: THIS WEBSITE IS CURRENTLY UNDER CONSTRUCTION</h1>
                    <h1>If things look unfinished, that's because they are.</h1>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>Nate Levine</h1>
                <p>Current sophomore at Worcester Polytechinic Institute</p>
                <p>pursuing a B.S. in mechanical engineering</p>
            </div>
        </div>
    );
}

export default About;