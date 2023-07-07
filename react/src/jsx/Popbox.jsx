import React, { useEffect, useRef } from 'react';

let Popbox = (props) => {

    const squareStyle = {
        position: 'absolute',
        background: props.color,
        width: props.width,
        height: props.height,
        left: props.left,
        top: props.top,
    }
      
    const callbackFunction = (entries) => {
        const [ entry ] = entries;
        if (entry.isIntersecting) {
            entry.target.classList.add('square-animation');
            entry.target.style.setProperty('animation-delay', props.delay);
            entry.target.style.setProperty('animation-duration', props.duration);
            entry.target.firstChild.classList.add('text-animation');
            entry.target.firstChild.style.setProperty('animation-delay', props.textDelay);
            entry.target.firstChild.style.setProperty('animation-duration', props.textDuration);
        }
    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    }

    const squareRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        if (squareRef.current)
            observer.observe(squareRef.current);
    }, []);

    return(
        <div style={ squareStyle } className='square' ref={squareRef}>
            <div className='text'>
                <h1 style={{ color: props.textColor }}>{ props.title }</h1>
            </div>
        </div>
    );
}

export default Popbox;