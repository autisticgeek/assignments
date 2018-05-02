import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editBookFunction} from "../redux";

class EditBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            _id: "",
            title: "",
            description: "",
            publisher: "",
            authorFName: "",
            authorLName: "",
            searchTags: "",
            isbn: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }


    handleSubmit(e) {
        e.preventDefault();
        e.target.submit.disabled = true;
        this.props.editBookFunction(this.state)
        window.location.assign('/')


    }
    componentDidMount() {
        let book = this.props.books.filter(obj => this.props.match.params.id === obj._id)
        this.setState({...book[0]})
    }

    render() {
        console.log(this.state);


        return (<div style={{padding:"3vw"}}>
        <form onSubmit={this.handleSubmit} style={{display:"grid", gridTemplateColumns:"1fr"}}>
                <input type="text" name="title" value={this.state.title} placeholder="Book Title" onChange={this.handleChange} />
                <textarea value={this.state.description} name="description" onChange={this.handleChange}></textarea>
                <input type="text" name="authorFName" value={this.state.authorFName} placeholder="Author First Name" onChange={this.handleChange} />
                <input type="text" name="authorLName" value={this.state.authorLName} placeholder="Author Last Name" onChange={this.handleChange} />
                <input type="text" name="publisher" value={this.state.publisher} placeholder="Publisher" onChange={this.handleChange} />
                <input type="text" name="isbn" value={this.state.isbn} placeholder="ISBN 10" onChange={this.handleChange} />
                <input type="submit" id="submits" className="btn"/>
            </form></div>
        )
    }
}

export default connect(state => state, { editBookFunction })(EditBook)