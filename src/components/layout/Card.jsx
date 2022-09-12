import React from "react";
import './card.css'


export default props =>
    <div className="card" style={{
        borderColor: props.color || '#000000' // Set the borderColor || -> if not set, default
    }}>
        <div className="Content" style={{
            backgroundColor: props.colorBack || 'beige' // Children works as getting the code from the input
        }}>
            {props.children}
        </div>
        <div className="Footer" style={{
            backgroundColor: props.color || '#000'
        }}>
            {props.title}
        </div>
    </div>