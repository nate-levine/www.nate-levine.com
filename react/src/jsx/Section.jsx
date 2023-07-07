import React, { useEffect, useState } from 'react';

let Section = (props) => {

    const [isMobile, setIsMobile] = useState(false);
      
    useEffect(() => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setIsMobile(true);
        }
    }, []);

    if (isMobile)
    {
        return(
            <div className='sectionMobile' style={{ backgroundColor: props.backgroundColor, height: props.height }}>
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
    else if (!isMobile)
    {
        if (props.orientation == 'left')
        {
            return(
                <div className='section' style={{ "--rotation":`${props.rotation}deg`, backgroundColor: props.backgroundColor, height: props.height }}>
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
                <div className='section' style={{ "--rotation":`${props.rotation}deg`, backgroundColor: props.backgroundColor, height: props.height }}>
                    <a href={ props.url }>
                        <img style={{ backgroundColor: props.backgroundColor }} src={ props.image } />
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
}

export default Section;