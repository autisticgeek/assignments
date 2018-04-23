import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';

class articleFull extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            comments: []
        };
        this.fetchOneArticle = this.fetchOneArticle.bind(this);
        this.upVoteArticle = this.upVoteArticle.bind(this);
        this.downVoteArticle = this.downVoteArticle.bind(this);
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
                        <i className="far fa-arrow-alt-circle-up fa-2x" onClick={() => this.upVoteArticle(_id)}></i>
                        <h3>{votes}</h3>
                        <i className="far fa-arrow-alt-circle-down fa-2x" onClick={() => this.downVoteArticle(_id)}></i>
                    </div>
                    <div>
                        <h2>{title}</h2>
                        <div>{description}</div>
                    </div>
                </article>
                {comments}
            </div>
        )
    }
}
export default connect(null, )(articleFull)