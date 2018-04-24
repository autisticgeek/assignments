import React from "react";
import {Link} from 'react-router-dom'

export default function articleMin(props) {
    console.log("articleMin Props", props);
    const { description, downvote, title, upvote, _id, downvoteArticle, upvoteArticle} = props
    const votes = upvote - downvote;

    return (
        <article>
            <div className="voteBox" ><i className="far fa-arrow-alt-circle-up fa-2x" onClick={()=> upvoteArticle(_id)} title={upvote}></i><h3>{votes}</h3><i className="far fa-arrow-alt-circle-down fa-2x" onClick={()=> downvoteArticle(_id)} title={downvote}></i></div>
            <div>
                <h2><Link to={`article/${_id}`}>{title}</Link></h2>
                <div dangerouslySetInnerHTML={{__html: description}}></div>
            </div>
        </article>
    )
}