import React from "react"
import './Picture.css'

export default props => {
    return (
        <div className="container">
            <img src={props.src} className='PictureProfile'></img>
            <p>Name: {props.name}</p>
            <p>Breed: {props.breed}</p>
        </div>
    )
}