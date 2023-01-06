import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Section from './Section.jsx';
import Typing from './Typing.jsx';

let Portfolio = () => {
    return(
        <div>
            <Header />
            <Typing text='Portfolio.' />
            <Section orientation='left' backgroundColor='#eeeeee' />
            <Section orientation='right' backgroundColor='#ffffff'  />
            <Section orientation='left' backgroundColor='#eeeeee'  />
            <Footer />
        </div>
    );
}

export default Portfolio;