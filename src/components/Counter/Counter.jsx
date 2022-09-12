import React, { Component } from "react";
import Display from './Display'

export default class Contador extends Component {

    state = {
        step: this.props.step || 1,
        value: this.props.value || 0,
        text: 'Press the button!'
    }

    up = () => {
        this.setState({
            value: this.state.value + this.state.step,       // Getters
            text: 'Went up!'
        })
    }

    down = () => {
        this.setState({
            value: this.state.value - this.state.step,       // Getters
            text: 'Went down!'
        })
    }



    render() {
        return (
            <div>
                <h2>Counter</h2>
                <label>Step:</label>
                <input type="number" onChange={e =>
                    this.setState({ step: +e.target.value })  // log e
                }
                    style={{ width: '40px' , marginLeft: '10px'}} />
                
                <Display value={this.state.value}></Display>
                <h3>{this.state.text}</h3>


                <div>
                    <button onClick={this.up}>+</button>
                    <button onClick={this.down}>-</button>
                </div>
            </div>
        )
    }
}