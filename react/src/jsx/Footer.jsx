import React from 'react';

let Footer = () => {
    return(
        <div className='footer'>
            <div className='blocks'>
                <div></div>
                <div>
                    <p>Hosted With</p>
                    <ul>
                        <li>Netlify</li>
                        <li>GitHub</li>
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
                    <p>Links & Downloads</p>
                    <ul>
                        <li><a href='https://www.linkedin.com/in/nate-levine-/'>LinkedIn</a></li>
                        <li><a href='https://drive.google.com/file/d/1rV_y_y514oV3aj6kvZWtXGQJRkhuUjVE/view?usp=sharing'>Resume</a></li>
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