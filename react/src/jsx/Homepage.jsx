import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Typing from './Typing.jsx';

let Homepage = () => {
    return(
        <div>
            <Header />
            <Typing text='Nate Levine.' />
            <Footer />
        </div>
    );
}

export default Homepage;