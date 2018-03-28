import React from 'react';
import Brand from "../../images/palmHammock.png";

function Nav() {
    return (<nav>
        <div className="container">
            <div>
                <a href="." className="brand">
                    <img src={Brand} alt="" />
                    <div>Many Islands Tours</div>
                </a>
            </div>
            <ul>
                <li>
                    <a href=".?figi">Fiji</a>
                </li>
                <li>
                    <a href="./hawaii.html">Hawaii</a>
                </li>
                <li>
                    <a href="./tonga.html">Tonga</a>
                </li>
                <li>
                    <a href="tahiti.html">Tahiti</a>
                </li>
                <li>
                    <a href="somoa.html">Somoa</a>
                </li>

            </ul>
        </div>
    </nav>);
}


export default Nav