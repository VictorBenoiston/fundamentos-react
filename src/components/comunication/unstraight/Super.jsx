import React, { useState } from "react"
import Sub from './Sub'

export default (props) => {

    const [num, setNum] = useState(0) // Indicates the initial value. [var, setFunction]
    const [label, setLabel] = useState('Number') 
    var [counter, setCounter] = useState(0)

    function whenClick(newNumber, name) {
        setNum(newNumber) // Calling the setNum with the new number as parameter.
        setLabel('New Number: ')
        setCounter(counter += 1)
    }

    return (
        <div>
            <h2>{label}: {num}</h2>
            <h4>Iteration: {counter}</h4>
            <Sub action={whenClick}></Sub>
        </div>
    )
}