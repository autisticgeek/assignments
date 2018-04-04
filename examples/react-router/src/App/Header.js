import React from "react";
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header>
            <nav>
                <ul style={{ listStyleType: "none", display: "flex", justifyContent: "space-around", paddingLeft: "0px" }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="About">About</Link></li>
                    <li><Link to="Contact">Contact</Link></li>
                    <li><a href="https://google.com">Google</a></li>
                </ul>
            </nav>
        </header>
    )
}