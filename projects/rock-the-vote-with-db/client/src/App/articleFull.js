import React, { Component } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";

class ArticleFull extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            comments: []
        };
        this.fetchOneArticle = this.fetchOneArticle.bind(this);
        this.upVoteArticle = this.upVoteArticle.bind(this);
        this.downVoteArticle = this.downVoteArticle.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
    }
    fetchOneArticle = articleID => {
        axios.get(`/post/${articleID}`)
            .then(responce => {
                this.setState({
                    ...this.state,
                    data: responce.data
                });
            })
        axios.get(`/comments?postID=${articleID}`)
            .then(responce => {
                console.log("comments ", responce.data);
                this.setState({
                    ...this.state,
                    comments: responce.data
                })
            }
            )
    }
    downVoteArticle = articleID => {
        axios.get(`/downvote/${articleID}`)
            .then(response => {
                this.setState({
                    ...this.state,
                    data: response.data
                })
            })
    }
    upVoteArticle = articleID => {
        axios.get(`/upvote/${articleID}`)
            .then(response => {
                this.setState({
                    ...this.state,
                    data: response.data
                })
            })
    }
    deleteArticle = (articleID) => {
        let areYouSure = window.confirm("Are you sure?");
        if (areYouSure) {
            axios.delete(`/post/${articleID}`)
                .then(window.location.assign('/'))
        }
    }


    componentDidMount() {
        this.fetchOneArticle(this.props.match.params.id)
    }

    render() {
        console.log("articleFull props", this.props);
        console.log("articleFull state", this.state);
        const { description, downvote, title, upvote, _id } = this.state.data;
        let votes = 0;
        if (upvote) votes = upvote - downvote;

        const comments = this.state.comments.map(comment => <div className="comment" key={comment._id}>{comment.comment}</div>)

        return (
            <div>
                <article>
                    <div className="voteBox" >
                        <i className="far fa-arrow-alt-circle-up fa-2x" onClick={() => this.upVoteArticle(_id)} title={upvote}></i>
                        <h3>{votes}</h3>
                        <i className="far fa-arrow-alt-circle-down fa-2x" onClick={() => this.downVoteArticle(_id)} title={downvote}></i>
                        <i className="far fa-trash-alt fa-2x" onClick={() => this.deleteArticle(_id)} title="Trash this article"></i>
                        <Link to={`/edit/${_id}`}><i className="fas fa-edit fa-2x"></i></Link>

                    </div>
                    <div>
                        <h2>{title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: description }}></div>
                    </div>
                </article>
                {comments}
            </div>
        )
    }
}
export default ArticleFull