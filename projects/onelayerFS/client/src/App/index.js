import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Route, withRouter } from "react-router-dom"
import { getBooks } from "../redux"
import addBook from "./addBook"
import showBooks from "./showBooks"
import singleBook from "./singleBook"


class App extends Component {
    componentDidMount() {
        this.props.getBooks()
    }


    render() {
        console.log(this.state);
        return (
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/add">Add Book</Link>
                </nav>
                <form></form>
                <hr />
                <Switch>
                    <Route exact path="/" component={showBooks} />
                    <Route path="/add" component={addBook} />
                    <Route path="/book/:id" component={singleBook} />

                </Switch>
            </div>
        )
    }
}

export default withRouter(connect(null, { getBooks })(App))