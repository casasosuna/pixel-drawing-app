import React, { Component, useState, useEffect } from 'react'
import Colors from '../components/Colors'
import Pixel from '../components/Pixel'

const Canvas = props => {

    const [matrix, setMatrix] = useState(Array(30)
        .fill()
        .map(() => Array(30).fill(0)))
    
    useEffect(
        () => {
            if (JSON.parse(localStorage.getItem("new_canvas"))) {
                setMatrix(JSON.parse(localStorage.getItem("new_canvas")))
            } 
        }, []
    )


    
    /* 
    const localArray = JSON.parse(localStorage.getItem("new_canvas"))
    setMatrix(localArray)
    console.log("here") */

    const changeColor = (rowIndex, colIndex) => {
        const newMatrix = JSON.parse(JSON.stringify(matrix))
        newMatrix[rowIndex][colIndex] = props.currentColor
        setMatrix(newMatrix)
        const jsonMatrix = JSON.stringify(newMatrix)
        localStorage.setItem("new_canvas", jsonMatrix)
        console.log(typeof localStorage.getItem("new_canvas"))
        console.log(localStorage.getItem("new_canvas"))
    }

    return (
        <div className={'canvas'}>
            {matrix.map((row, rowIndex) =>
                row.map((_, colIndex) => {
                    return (
                        <Pixel 
                            key={`${rowIndex}-${colIndex}`}
                            background={Colors[matrix[rowIndex][colIndex]]}
                            onClick={e => changeColor(rowIndex, colIndex)}
                        />
                    )
                }
                )
            )}

        </div>
    )
}

export default Canvas