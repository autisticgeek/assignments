import React, { Component } from 'react'
import axios from "axios";

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.stringifyUrl = this.stringifyUrl.bind(this);

    }
    stringifyUrl(e) {
        e.preventDefault();
        const query= {

            color:e.target.color.value,
            species: e.target.species.value
        }
        console.log("query", query)
        let serverQuery=`color=black&species=${query.species}`
        console.log(`/data?${serverQuery}`)
        axios.get(`/data?${serverQuery}`).then(responce => {
            this.setState({
                data: responce.data
            })
        }
        )
        e.target.reset()
    }

    render() {
        console.log("state", this.state.data)
        const resultQuery = this.state.data.map((obj, i)=><div key={i}>{obj.color}, {obj.species}</div>)

        return (
            <div>
                <form onSubmit={this.stringifyUrl}>
                    <input type="text" name="color" placeholder="COLOR" />
                    <input type="text" name="species" placeholder="SPECIES" />
                    <input type="submit" value="submit" />
                </form>
            {resultQuery}
            </div>
        )
    }
}
