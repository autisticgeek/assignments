import React, { Component } from "react";

class Stopwatch extends Component {
    componentWillReceiveProps(newProps) {
        console.log(this.props);
        console.log(newProps);
    }
    shouldComponentUpdate() {
        return this.props.stopwatch;
    }
    render() {
        const { stopwatch } = this.props;
        return (
            <div>
                {stopwatch}
            </div>
        )
    }
}

export default Stopwatch;