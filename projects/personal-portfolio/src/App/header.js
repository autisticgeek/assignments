import React from "react";
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <div>
            <nav>
                <div className="container flex-around">
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="contact">Contact</Link>
                    <a href="https://google.com">Google</a>
                </div>
            </nav>
            <header>
                <div className="container">
                    <h1>Steven M. Blakely</h1>
                </div>
            </header>
        </div>
    )
}