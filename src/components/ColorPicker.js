import React from 'react'
import Pixel from '../components/Pixel'
import Colors from '../components/Colors'

export default props => {
    return (
        <div className="colorpicker">
            {Colors.map((color, index) => {
                return <Pixel key={index} background={color}/>
            })}
        </div>
    )
}