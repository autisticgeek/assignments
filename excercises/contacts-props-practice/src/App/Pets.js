import React from "react";

function Pet(props) {
    const { name, breed } = props;

    return (
        <li>{name} — {breed}</li>
    )
}

export default Pet;