import React, { useState, useEffect }  from 'react';

let Typing = (props) => {
    const [text, setText] = useState('');
    const [caretStyle, setCaretStyle] = useState('.08em solid #000000');
    
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
        if (style === '.08em solid #000000') {
            style = '0 solid #000000';
        } else if (style === '0 solid #000000') {
            style = '.08em solid #000000';
        }
        setCaretStyle(style);

        setTimeout(() => {
            caretBlink(style);
        }, 1000);
    }

    useEffect(() => {
        let index = 0;
        typeText(props.text, index);
    }, []);
    

    return(
        <div className='typing'>
            <h1 style={{ borderRight: caretStyle }}>{text}</h1>
        </div>
    );
}

export default Typing;