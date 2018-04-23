import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles, downvoteArticle, upvoteArticle } from '../redux';
import ArticleMin from './articleMin';


class allArticles extends Component {
    componentDidMount() {
        this.props.fetchArticles();
    }
    render() {
        console.log(this.props);
        let { data } = this.props;
        data.sort((a, b) => {
            console.log("sort A",a.upvote);
            console.log("sort B",b.upvote);
            
            return b.upvote - a.upvote})
        const articles = data.map((obj) => <ArticleMin key={obj._id} {...obj} downvoteArticle={this.props.downvoteArticle} upvoteArticle={this.props.upvoteArticle}/>)

        return (
            <div>
                {articles}
            </div>
        )
    }
}

export default connect(state => state, { fetchArticles, downvoteArticle, upvoteArticle })(allArticles);