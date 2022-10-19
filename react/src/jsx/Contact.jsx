import React from 'react';
import NavigationBar from './NavigationBar';
import '../css/Contact.css';

let Contact = () => {
    return(
        <div>
            <NavigationBar />
            <p class='email-subtext'>contact me at</p>
            <div class='email'>
                <a class='email-link' href='mailto: n8levine11@gmail.com'>n8levine11@gmail.com</a>
            </div>
            <p class='linkedin-subtext'>you can also find me at</p>
            <div class='linkedin'>
                <a class='linkedin-link' href='https://www.linkedin.com/in/nate-levine-/'>linkedin.com/nate-levine-</a>
            </div>
        </div>
    );
}

export default Contact;