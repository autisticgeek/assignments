import React from "react";

function Header(props) {
    console.log(props)
    return (<header id={props.id} className="para">
    <div className="container">
        <h1>{props.content}</h1>

    </div>
</header>)
}
export default Header;