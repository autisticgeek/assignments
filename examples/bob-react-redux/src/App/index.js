import React from "react";
import { connect } from "react-redux";
import { increment } from "../redux"
import { decrement } from "../redux"
import { devide } from "../redux"

const mapStateToProps= (state) =>{
    return {counter:state}
}

const App = (props) => {
    console.log(props)
    return (
        <div className="app">
            <button onClick={props.devide} >/2</button>
            <button onClick={props.decrement} >-</button>
            <h1>{props.counter}</h1>
            <button onClick={()=>props.increment(1)}>+1</button>
            <button onClick={()=>props.increment(2)}>+2</button>
        </div>
    )
}

export default connect(mapStateToProps, { increment, decrement, devide})(App)