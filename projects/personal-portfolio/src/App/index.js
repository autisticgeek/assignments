import React from "react";
import { Switch, Route } from "react-router-dom"

import Header from "./header"
import Footer from "./footer"
import Main from "./main"
// import About from "./About"
// import Contact from "./Contact"



export default function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Main}></Route>
                {/* <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route> */}
            </Switch>

            <Footer />
        </div>
    )
}