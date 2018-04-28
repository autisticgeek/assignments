import React, { Component } from 'react'
import { connect } from 'react-redux';
import { newArticlePost } from '../redux';
import CKEditor from "react-ckeditor-component";

class newArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            title: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {

        const title = e.target.value;
        this.setState({
            ...this.state,
            title
        })
    }

    onChange(evt) {
        // console.log("onChange fired with event info: ", evt);
        const description = evt.editor.getData();
        this.setState({
            ...this.state,
            description
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        e.target.submit.disabled = true;
        this.props.newArticlePost(this.state)
        window.location.assign('/')


    }

    render() {
        console.log(this.props);


        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Title" onChange={this.handleChange} required />
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

export default connect(null, { newArticlePost })(newArticle)
// export default (newArticle)