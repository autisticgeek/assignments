import React, { Component } from 'react'
import CKEditor from "react-ckeditor-component";
import axios from "axios";

class EditArticle extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            description:'',
            _id: ''
        }


        this.handleChange = this.handleChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchOneArticle = this.fetchOneArticle.bind(this)

    }

    handleChange(e) {
        const title = e.target.value;
        this.setState({
            ...this.state,
            title
        })
    }

    onChange(e) {
        const description = e.editor.getData();
        this.setState({
            ...this.state,
            description
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        e.target.submit.disabled = true;
        axios.put(`/post/${this.state._id}`, this.state).then(window.location.assign(`/article/${this.state._id}`))


    }
    fetchOneArticle(articleID) {
        axios.get(`/post/${articleID}`)
            .then(responce => {
                this.setState({
                    title: responce.data.title,
                    description: responce.data.description,
                    _id:articleID
                });
            })
    }
    
    componentDidMount() {
        this.fetchOneArticle(this.props.match.params.id)
    }

    render() {
        console.log(this.state);


        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Title" onChange={this.handleChange} required value={this.state.title}/>
                <input type="submit" id="submit" />
                <CKEditor
                    content={this.state.description}
                    events={{
                        "change": this.onChange
                    }}
                /></form>
        )
    }
}

export default EditArticle;