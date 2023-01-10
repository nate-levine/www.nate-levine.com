import React from 'react';

let CurveTR = (props) => {

    let lines = [];
    for (var i = 0; i < props.colors.length; i++)
    {
        const lineStyle = {
            position: 'absolute',
            width: `calc(${props.width} - calc(${props.thickness} * ${props.colors.length - i}))`,
            height: `calc(${props.height} - calc(${props.thickness} * ${props.colors.length - i}))`,  
            left: props.left,
            top: `calc(${props.top} + calc(${props.thickness} * ${(props.colors.length - 1) - i}))`,
        
            border: 'solid',
            borderColor: `${props.colors[i]} ${props.colors[i]} transparent transparent`,
            borderRadius: `0 calc(${props.radius} + calc(${props.thickness} * ${i + 2})) 0 0`,
            borderWidth: `${props.thickness} ${props.thickness} 0 0`,
        }

        lines.push(<div style={lineStyle} />);
    }

    return(
        <div>
            {lines}
        </div>
    );
}

export default CurveTR;