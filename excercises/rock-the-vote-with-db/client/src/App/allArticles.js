import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchArticles} from '../redux';
import ArticleMin from './articleMin';


class allArticles extends Component {
    componentDidMount(){
        this.props.fetchArticles();
    }
    render() {
        console.log(this.props);
        const {data}= this.props;
        const articles= data.map((obj)=><ArticleMin key={obj._id} {...obj} />)
        
        return (
            <div>
              {articles} 
            </div>
        )
    }
}

export default connect(state=>state, {fetchArticles})(allArticles);