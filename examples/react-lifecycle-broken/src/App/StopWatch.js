import React, { Component } from "react";

export default class StopWatch extends Component {
    componentDidMount() {
        alert("Hey, I mounted")
    }
    componentWillMount(newProps) {

    }
    render() {
        return (
            <div>StopWatch Component</div>
        )
    }
}