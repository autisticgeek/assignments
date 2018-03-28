import React from "react";
import Pet from "./Pets"

function Friend(props) {
    //console.log(props)
    const {name, age, pets} = props
    const petsList = pets.map((petObj, index) => <Pet key={index} {...petObj}/>)
    
    return (
        <div>
            <h1>{name}—{age}</h1>
            <ol>{petsList}</ol>
        </div>
    )
}

export default Friend;