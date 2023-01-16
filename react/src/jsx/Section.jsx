import React from 'react';
import { Link } from 'react-router-dom';

let Section = (props) => {
      
    if (props.orientation == 'left')
    {
        return(
            <div className='section' style={{ backgroundColor: props.backgroundColor, height: props.height }}>
                <a href={ props.url }>
                    <div>
                        <h1>{props.title}</h1>
                        <h3>{props.subtitle}</h3>
                        <p>{props.text}</p>
                        <h3 className='link'>{props.link}</h3>
                    </div>
                </a>
                <a href={ props.url }>
                    <img style={{ backgroundColor: props.backgroundColor }} src={ props.image } />
                </a>
            </div>
        );
    }
    else if (props.orientation == 'right')
    {
        return(
            <div className='section' style={{ backgroundColor: props.backgroundColor, height: props.height }}>
                <a href={ props.url }>
                    <img src={ props.image } />
                </a>
                <a href={ props.url }>
                    <div>
                        <h1>{props.title}</h1>
                        <h3>{props.subtitle}</h3>
                        <p>{props.text}</p>
                        <h3 className='link'>{props.link}</h3>
                    </div>
                </a>
            </div>
        );
    }
}

export default Section;