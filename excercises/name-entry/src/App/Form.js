import React, { Component } from 'react';
import List from "./List"

export default class Form extends Component {
    constructor(props) {
        super(props);
        //set itinial state
        this.state = {
            storedInput: "",
            list: []
        }
        //bind events
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    // handle changestotext field and store them
    handleChange(event) {
        const { value, name } = event.target;
        this.setState(currentState => {
            return {
                ...currentState,
                [name]: value
            }
        })
    }
    // handle submit, empty the form, add what is in storedInput to list while keeping previous list.
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
        // pull properties from state to set the form.
        const { storedInput, list } = this.state;
        //pass what is in the list to "List" component.
        const printList= list.map((element,index) => <List key={index} content={element}/>)

        //build the form
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="storedInput"
                        value={storedInput} onChange={this.handleChange} /><input type="submit" />
                </form>
                {/* Display content of input in an H1 */}
                <h1>{storedInput}</h1>
                {/* Build ul to take display the array called printList */}
                <ul>
                    {printList}
                    </ul>
            </div>
        )
    }

}

