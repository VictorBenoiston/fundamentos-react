import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { useEffect } from 'react';

export default props => {

    const [numbers, setNumbers] = useState(Array(props.quantity || 6).fill(0));
    const [msg, setMsg] = useState('')

    function createNumbers(array){
        const number = Math.random() * (60 - 1) + 1
        return array.includes(number) ? createNumbers(array) : number
    }

    function ShowNumbers() {
        setMsg('The drawn numbers were:')
        setNumbers(numbers.map(number =>(createNumbers(numbers).toFixed(0))).sort((a, b) => a - b))

    }




    return (
        <div>
            <h2>Drawn numbers:</h2>
            <h4>{msg}</h4>
            <h4>{numbers.join(' ')}</h4>
            <button onClick={ShowNumbers}>Draw numbers</button>
        </div>
    )
}