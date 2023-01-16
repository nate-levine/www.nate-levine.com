import React from 'react';
import { Link } from 'react-router-dom';

let Section = (props) => {
      
    if (props.orientation == 'left')
    {
        return(
            <div className='section' style={{ backgroundColor: props.backgroundColor, height: props.height }}>
                <Link to='/'>
                    <div>
                        <h1>{props.title}</h1>
                        <h3>{props.subtitle}</h3>
                        <p>{props.text}</p>
                        <h3 className='link'>
                            <Link to='/'>{props.link}</Link>
                        </h3>
                    </div>
                </Link>
                <Link to='/'>
                    <img style={{ backgroundColor: props.backgroundColor }} src={ props.image } />
                </Link>
            </div>
        );
    }
    else if (props.orientation == 'right')
    {
        return(
            <div className='section' style={{ backgroundColor: props.backgroundColor, height: props.height }}>
                <Link to='/'>
                    <img src={ props.image } />
                </Link>
                <Link to='/'>
                    <div>
                        <h1>{props.title}</h1>
                        <h3>{props.subtitle}</h3>
                        <p>{props.text}</p>
                        <h3 className='link'>
                            <Link to='/'>{props.link}</Link>
                        </h3>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Section;