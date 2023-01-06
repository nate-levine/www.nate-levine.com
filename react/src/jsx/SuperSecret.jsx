import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Typing from './Typing.jsx';

let SuperSecret = () => {
    return(
        <div>
            <Header />
            <Typing text='Super Secret.' />
            <Footer />
        </div>
    );
}

export default SuperSecret;