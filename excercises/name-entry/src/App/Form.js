import React, { Component } from 'react';
import List from "./List"

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storedInput: "",
            list: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        const { value, name } = event.target;
        this.setState(currentState => {
            return {
                ...currentState,
                [name]: value
            }
        })
    }
    handleSubmit(event) {
        event.preventDefault();
;        this.setState(currentState => {
            return {
                storedInput:'',
                list: [...currentState.list,
                currentState.storedInput
                ]
            }

        }
        )
    }
    render() {
        const { storedInput, list } = this.state;
        const printList= list.map((element,index) => <List key={index} content={element}/>)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="storedInput"
                        value={storedInput} onChange={this.handleChange} />
                </form>
                <h1>{storedInput}</h1>
                <ul>
                    {printList}
                    </ul>
            </div>
        )
    }

}

