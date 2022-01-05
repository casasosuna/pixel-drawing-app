import React from 'react'
import Pixel from '../components/Pixel'
import Colors from '../components/Colors'

export default props => {
    return (
        <div className="colorpicker">
            {Colors.map((color, index) => {
                return <Pixel
                    onClick={e => props.setColor(index)} 
                    key={index} 
                    background={color}
                    current={Colors[props.currentColor] === color}
                    />
            })}
        </div>
    )
}