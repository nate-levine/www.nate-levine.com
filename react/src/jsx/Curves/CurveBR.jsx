import React from 'react';

let CurveBR = (props) => {

    let lines = [];
    for (var i = 0; i < props.colors.length; i++)
    {
        const lineStyle = {
            position: 'absolute',
            width: `calc(${props.width} - calc(${props.thickness} * ${props.colors.length - i}))`,
            height: `calc(${props.height} - calc(${props.thickness} * ${props.colors.length - i}))`,  
            left: props.left,
            top: props.top,
        
            border: 'solid',
            borderColor: `transparent ${props.colors[i]} ${props.colors[i]} transparent`,
            borderRadius: `0 0 calc(${props.radius} + calc(${props.thickness} * ${i + 2})) 0`,
            borderWidth: `0 ${props.thickness} ${props.thickness} 0`,
        }

        lines.push(<div style={lineStyle} />);
    }

    return(
        <div>
            {lines}
        </div>
    );
}

export default CurveBR;