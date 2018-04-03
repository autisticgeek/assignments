import React from "react";
import axios from "axios";

const apiUrl = "http://www.colr.org/json/color/random";

export default class RandColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                backgroundColor:"#FFFFFF",
                minHeight:"5cm"
        }
        }
    }
    componentDidMount() {
        axios.get(apiUrl).then(response => {
            console.log(response.data.colors[0])
            this.setState({
                style: {
                    minHeight:"5cm",
                    backgroundColor:"#" + response.data.colors[0].hex}
            })
        })
    }


    render() {
        return (
            <div style={this.state.style}>
                Hello
            </div>
        )
    }
}

