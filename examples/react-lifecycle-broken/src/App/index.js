import React from "react";
import StopWatch from "./StopWatch"

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stopwatch: 0
        }
    }


    componentDidMount() {
        this.interval = setInterval(() => {
            console.log
            this.setState(prevState => {
                console.log(prevState.stopwatch)
                return {
                    stopwatch: prevState.stopwatch + 1
                }
            })
        }) 
    }
    render() {
        return (
            <div>
                <StopWatch />
            </div >
        )
    }
}