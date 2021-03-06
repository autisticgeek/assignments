import React from "react";
import { Switch, Route } from "react-router-dom"

import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"



export default function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
            </Switch>

            <Footer />
        </div>
    )
}