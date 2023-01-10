import React from 'react';

let CurveBL = (props) => {

    let lines = [];
    for (var i = 0; i < props.colors.length; i++)
    {
        const lineStyle = {
            position: 'absolute',
            width: `calc(${props.width} - calc(${props.thickness} * ${props.colors.length - i}))`,
            height: `calc(${props.height} - calc(${props.thickness} * ${props.colors.length - i}))`,  
            left: `calc(${props.left} + calc(${props.thickness} * ${(props.colors.length - 1) - i}))`,
            top: props.top,
        
            border: 'solid',    
            borderColor: `transparent transparent ${props.colors[i]} ${props.colors[i]}`,
            borderRadius: `0 0 0 calc(${props.radius} + calc(${props.thickness} * ${i + 2}))`,
            borderWidth: `0 0 ${props.thickness} ${props.thickness}`,
        }

        lines.push(<div style={lineStyle} />);
    }

    return(
        <div>
            {lines}
        </div>
    );
}

export default CurveBL;