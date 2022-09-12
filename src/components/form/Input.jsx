import React, { useState } from "react"

export default props => {
    var [name, setName] = useState('Pedro')
    var [msg, setMsg] = useState('Welcome!')
    var [counter, setCounter] = useState(0)

    function whenClick() {
        setCounter(counter + 1)
        name.length >= 5 ?
            setMsg('Big name') : setMsg('Small name')

    }

    return (
        <div>
            <input type="text" value={name}
                onChange={e => setName(e.target.value)} />
            <button
                onClick={whenClick}>Click here!</button>
            <h3>Hi, {name}! {msg}</h3>
            <h4>You tested: {counter} names!</h4>
        </div>
    )

}




