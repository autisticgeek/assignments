import React from "react";
import axios from "axios";

export default class HitList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            loading: true,
            error: ""
        }
        this.takenOut = this.takenOut.bind(this)
    }
    componentDidMount() {
        axios.get(`http://api.vschool.io:6543/hitlist.json`).then(response => {
            this.setState({
                list: response.data,
                loading: false
            })
        })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: err.message
                })
            })

    }
    takenOut(i) {
        this.setState(currentState => {
            let newList = currentState.list;
            newList[i].style = { opacity: "0.3" };
            return newList
        }
        )
    }

    render() {

        console.log(this.state);
        const { list, loading, error } = this.state;
        let data = "";
        if (loading) {
            data = "loading..."
        } else if (error !== "") {
            data = error
        } else {
            data = list.map((personObj, index) => <div key={index} style={personObj.style} onClick={() => this.takenOut(index)}><figure ><img src={personObj.image} alt="" /><figcaption>{personObj.name}</figcaption></figure></div>)
        }
        return (
            <div id="list">
                {data}
            </div>
        )
    }
}