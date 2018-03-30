import React from "react";

function Hero(props) {
    console.log(props)
    const{handleClick, name, img, catchphrase} = props;
   

return (
<div>
   <h1 onClick={()=>handleClick(catchphrase)}>{name}</h1>
   <img src={img} alt=""/>
</div>
)
}

export default Hero;