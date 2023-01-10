import React from 'react';

let Footer = () => {
    return(
        <div className='footer'>
            <div className='blocks'>
                <div></div>
                <div>
                    <p>Hosted With</p>
                    <ul>
                        <li>GitHub</li>
                        <li>Netlify</li>
                    </ul>
                </div>
                <div>
                    <p>Libraries Used</p>
                    <ul>
                        <li>React.js</li>
                        <li>iro.js</li>
                        <li>js-cookie</li>
                    </ul>
                </div>
                <div>
                    <p>Links</p>
                    <ul>
                        <li>Resume</li>
                    </ul>
                </div>  
                <div></div>
            </div>
            <div>
                <p>© 2023 nate-levine.com. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;