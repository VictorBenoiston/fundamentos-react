import React from "react"

export default props => {
    return(    
        <div>
        <h2>The number: {props.number} is:</h2>
        { props.number % 2 === 0 ? <span>Is an even number!</span>: 
        <span style={{
            color: props.colorCondition || 'black'
        }}>Is an odd number!</span>}
        <p/>{props.number > 10? <span className="color">This is a big number!</span>:<span className="color">It is a small number!</span>}
        </div>)

}

    