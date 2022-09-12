import React from "react"

export default props => {
    return(    
    <div>
        <button onClick={() => {
            props.action(Math.random() * 100, props.message)
        }}>Switch</button>
    </div>)

}
