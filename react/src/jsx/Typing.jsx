import React, { useState, useEffect, useRef }  from 'react';

let Typing = (props) => {
    let observed = false;
    const [text, setText] = useState('');
    const [caretStyle, setCaretStyle] = useState('0 solid #000000');
    
    // DYNAMIC TYPING ANIMATION
    function typeText(text, index) {
        let partial = text.substr(0, index);
        setText(partial);

        if (index < text.length) {
            index++;
            let delta = 200 - Math.random() * 100;

            setTimeout(() => {
                typeText(text, index);
            }, delta);
        }
        else {
            caretBlink('0 solid #000000');
        }
    }
    function caretBlink(style)
    {
        if (!props.stopBlink) {
            if (style === '.08em solid #000000') {
                style = '0 solid #000000';
            } else if (style === '0 solid #000000') {
                style = '.08em solid #000000';
            }
            setCaretStyle(style);

            setTimeout(() => {
                caretBlink(style);
            }, 1000);
        } else {
            setCaretStyle('0 solid #000000');
        }
    }

    const callbackFunction = (entries) => {
        const [ entry ] = entries;
        if (entry.isIntersecting && !observed) {
            observed = true;
            // TYPING TRIGGER
            setTimeout(() => {
                setCaretStyle('.08em solid #000000');
                typeText(props.text, 0);
                observer.unobserve(typingRef.current);
            }, props.delay);
        }
    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.75,
    }

    const typingRef = useRef(null);
    useEffect(() => {
        // SCROLL TRIGGER
        const observer = new IntersectionObserver(callbackFunction, options);
        observer.observe(typingRef.current);
    }, []);
    

    return(
        <div className='typing' style={{ height: props.height }} ref={ typingRef }>
            <h1 style={{ borderRight: caretStyle, display: 'inline', fontSize: props.fontSize }}>{text}</h1>
        </div>
    );
}

export default Typing;