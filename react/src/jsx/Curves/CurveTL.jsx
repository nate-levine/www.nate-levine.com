import React from 'react';

let CurveTL = (props) => {

    let lines = [];
    for (var i = 0; i < props.colors.length; i++)
    {
        const lineStyle = {
            position: 'absolute',
            width: `calc(${props.width} - calc(${props.thickness} * ${props.colors.length - i}))`,
            height: `calc(${props.height} - calc(${props.thickness} * ${props.colors.length - i}))`,  
            left: `calc(${props.left} + calc(${props.thickness} * ${(props.colors.length - 1) - i}))`,
            top: `calc(${props.top} + calc(${props.thickness} * ${(props.colors.length - 1) - i}))`,
        
            border: 'solid',
            borderColor: `${props.colors[i]} transparent transparent ${props.colors[i]}`,
            borderRadius: `calc(${props.radius} + calc(${props.thickness} * ${i + 2})) 0 0 0`,
            borderWidth: `calc(${props.thickness} + 1px) 0 0 calc(${props.thickness} + 1px)`,
        }

        lines.push(<div style={lineStyle} />);
    }

    return(
        <div>
            {lines}
        </div>
    );
}

export default CurveTL;