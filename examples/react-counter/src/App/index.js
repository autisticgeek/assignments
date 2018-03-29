import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.incrementCounter = this.incrementCounter.bind(this);
        this.deincrementCounter = this.deincrementCounter.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
    }
    incrementCounter() {
        this.setState(currentState => {
            return {
                counter: currentState.counter + 1
            }
        }
        )
    }
    deincrementCounter() {
        this.setState(currentState => {
            return {
                counter: currentState.counter - 1
            }
        }
        )
    }



    resetCounter() { this.setState({ counter: 0 }) }

    render() {
        return <div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.incrementCounter}>+1</button>
            <button onClick={this.deincrementCounter}>-1</button>
            <button onClick={this.resetCounter}>Reset</button></div>
    }
}



export default Counter