import React from "react";
import { Switch, Route } from "react-router-dom"
import Home from "./Home"
import Result from "./Result"


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/search" component={Result} />
                </Switch>
            </div>
        )
    }
}