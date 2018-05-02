import React, { Component } from 'react'
import { connect } from 'react-redux'
import{ Link } from 'react-router-dom'


class ShowBooks extends Component {


    render() {
        console.log("show",this.props);
        let books=[];
        if(this.props.books)
        books = this.props.books.map(obj => <div key={obj._id} className="booksView"><Link to={`/book/${obj._id}`}>{obj.title}</Link> by {obj.authorFName} {obj.authorLName}</div>)

        return (
            <div>
               {books}
            </div>
        )
    }
}

export default connect(state=>state, {})(ShowBooks)