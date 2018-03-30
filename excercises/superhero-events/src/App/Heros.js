import React from "react";
import Hero from './Hero.js'
import HeroList from "./heros.json"

function catchphrase(phrase){
    alert(phrase);
}
function Heros(props) {
    const heroArr = HeroList.map((heroObj, index)=> <Hero key={index} handleClick={catchphrase} {...heroObj} />)
    return (<div>{heroArr}</div>
    );
}

export default Heros;