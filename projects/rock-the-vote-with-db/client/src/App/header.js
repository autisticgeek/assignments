import React from "react";
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <header>
            <h1>Rock the vote app</h1>
            <nav style={{display:"flex", justifyContent:"space-around"}}>
                <Link to="/">ALL</Link>
                <Link to="/new">NEW</Link>
            </nav>
        </header>
    )
};