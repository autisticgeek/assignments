import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteBook } from '../redux'


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
            const { title, _id, authorFName, authorLName } = book[0]
            return (
                <div>
                    <h1>{title}</h1>
                    <h2>{authorFName} {authorLName}</h2>
                    <button onClick={() => this.delete(_id)}>Delete</button>
                </div>
            )
        }
        return (<div></div>)
    }
}

export default connect(state => state, { deleteBook })(SingleBook)