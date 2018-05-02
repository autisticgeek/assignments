import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteBook } from '../redux'
import { Link } from "react-router-dom"


class SingleBook extends Component {

    delete = (id) => {
        let areUsure = window.confirm("Are You sure you want to delete this book?")
        if (areUsure) {
            this.props.deleteBook(id);
            window.location.assign("/")
        }
    }

    render() {
        let book = [];
        if (this.props.books) {
            book = this.props.books.filter(obj => this.props.match.params.id === obj._id)
            console.log(book[0]);
            const { title, _id, authorFName, authorLName, description, isbn, publisher, year} = book[0]
            return (
                <div className="singleBook">
                    <h1>{title}</h1>
                    <h2>by {authorFName} {authorLName}</h2>
                    <h4>{year} {publisher}</h4>
                    <h4>{isbn}</h4>
                    <p>{description}</p>
                    <button onClick={() => this.delete(_id)} className="btn">Delete</button>
                    <Link to={`/edit/${_id}`} className="btn">Edit</Link>
                </div>
            )
        }
        return (<div></div>)
    }
}

export default connect(state => state, { deleteBook })(SingleBook)