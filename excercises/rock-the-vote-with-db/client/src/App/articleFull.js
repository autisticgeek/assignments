import React, { Component } from 'react'
import { connect } from 'react-redux';
import Axios from 'axios';

class articleFull extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:{},
            comments: []
        };
        this.fetchOneArticle= this.fetchOneArticle.bind(this)
    }
    fetchOneArticle = articleID => {
        Axios.get(`/post/${articleID}`)
        .then(responce =>{
            this.setState({
                ...state,
                data: responce.data
              });
        })
        Axios.get(`/comments?postID=${articleID}`)
        .then(responce =>{

        }

        )

    }
    componentDidMount() {
        this.fetchOneArticle(this.props.match.params.id)
    }

    render() {
        console.log("articleFull props", this.props);
        console.log("articleFull state", this.state);
        const { description, downvote, title, upvote, _id } = this.state.data;
        let votes = 0;
        
        if(upvote){
        votes = upvote - downvote;}


        return (
            <div>
            <article>
            <div className="voteBox" >
                <i className="far fa-arrow-alt-circle-up fa-2x"></i>
                <h3>{votes}</h3>
                <i className="far fa-arrow-alt-circle-down fa-2x"></i>
            </div>
            <div>
                <h2>{title}</h2>
                <div>{description}</div>
            </div>
        </article>
            </div>
        )
    }
}
export default connect(null, )(articleFull)