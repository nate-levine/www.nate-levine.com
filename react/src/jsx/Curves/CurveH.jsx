import React from 'react';

let CurveH = (props) => {

    let lines = [];
    for (var i = 0; i < props.colors.length; i++)
    {
        const lineStyle = {
            position: 'absolute',
            width: props.width,
            height: `calc(${props.thickness} * ${i})`,  
            left: props.left,
            top: props.top,
        
            border: 'solid', 
            borderColor: `transparent transparent ${props.colors[i]} transparent`,
            borderWidth: `0 0 calc(${props.thickness} + 1px) 0`,
        }

        lines.push(<div style={lineStyle} />);
    }

    return(
        <div>
            {lines}
        </div>
    );
}

export default CurveH;