import React, { Component } from "react";

import { connect } from "react-redux";
import { addCat } from "../redux/cats";


class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                imgUrl: '',
                caption: ''
            }
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
        console.log(this.state)
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addCat(this.state.inputs);
        this.setState(this.initialState);
    }
    render() {
        const { imgUrl, caption } = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={{display:"block", padding:"0.2cm"}}>
                    <label htmlFor="imgUrl" >Image URL</label>
                    <input onChange={this.handleChange} name="imgUrl" id="imgUrl" value={imgUrl} type="text"/>
                </div>
                <div style={{display:"block", padding:"0.2cm"}}>
                    <label htmlFor="caption" style={{display:"block"}}>Caption</label>
                    <input onChange={this.handleChange} name="caption" id="caption" value={caption} type="text"/>
                </div>
                <div style={{display:"block", padding:"0.2cm"}}>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}

export default connect(null, { addCat })(Form);