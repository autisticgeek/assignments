import React from "react";
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <div>
            <nav>
                <div className="container flex-around">
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <a href="https://github.com/autisticgeek"><i className="fab fa-github"></i></a><a href="https://www.linkedin.com/in/sblakely1/:="><i class="fab fa-linkedin-in"></i></a>
                </div>
            </nav>
            <header>
                <div className="container">
                    <h1>Steven Matthew Blakely</h1>
                </div>
            </header>
        </div>
    )
}