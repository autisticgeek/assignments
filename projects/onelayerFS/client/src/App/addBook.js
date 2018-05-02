import React, { Component } from 'react'
import { connect } from 'react-redux';
import { newBookFunction } from '../redux';
class NewBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        this.props.newBookFunction(this.state)
        window.location.assign('/')


    }

    render() {
        console.log(this.state);


        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="title" value={this.state.title} placeholder="Book Title" onChange={this.handleChange} />
                <textarea value={this.state.description} name="description" onChange={this.handleChange}></textarea>
                <input type="text" name="authorFName" value={this.state.authorFName} placeholder="Author First Name" onChange={this.handleChange}/>
                <input type="text" name="authorLName" value={this.state.authorLName} placeholder="Author Last Name" onChange={this.handleChange}/>
                <input type="text" name="publisher" value={this.state.publisher} placeholder="Publisher" onChange={this.handleChange}/>
                <input type="text" name="isbn" value={this.state.isbn} placeholder="ISBN 10" onChange={this.handleChange}/>
                <input type="submit" />
            </form>
        )
    }
}

export default connect(null, { newBookFunction })(NewBook)