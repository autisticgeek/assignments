import React, { Component } from "react";

import Stopwatch from "./Stopwatch/";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stopwatch: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => {
                return {
                    stopwatch: prevState.stopwatch + 1
                }
            })
        }, 1000);
    }
    render() {
        const { stopwatch } = this.state;
        return (
            <div>
                <Stopwatch stopwatch={stopwatch}></Stopwatch>
            </div>
        )
    }

}

export default App;