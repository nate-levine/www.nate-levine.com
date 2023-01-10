import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Typing from './Typing.jsx';

let Contact = () => {
    return(
        <div>
            <Header />
            <Typing fontSize='15vw' text='Contact.' />
            <Footer />
        </div>
    );
}

export default Contact;