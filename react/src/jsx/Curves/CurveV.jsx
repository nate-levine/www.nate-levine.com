import React from 'react';

let CurveV = (props) => {

    let lines = [];
    for (var i = 0; i < props.colors.length; i++)
    {
        const lineStyle = {
            position: 'absolute',
            width: `calc(${props.thickness} * ${i})`,
            height: props.height,  
            left: props.left,
            top: props.top,
        
            border: 'solid', 
            borderColor: `transparent ${props.colors[i]} transparent transparent`,
            borderWidth: `0 calc(${props.thickness} + 1px) 0 0`,
        }

        lines.push(<div style={lineStyle} />);
    }

    return(
        <div>
            {lines}
        </div>
    );
}

export default CurveV;