import React from "react";

let vacationSpots = [
    {
        place: "Meridian, Idaho",
        price: 40,
        timeToGo: "Spring"
    }, {
        place: "Cancun",
        price: 900,
        timeToGo: "Winter"
    }, {
        place: "China",
        price: 1200,
        timeToGo: "Fall"
    }, {
        place: "Russia",
        price: 1100,
        timeToGo: "Summer"
    }, {
        place: "Lebanon",
        price: 400,
        timeToGo: "Spring"
    }
]
function dollarSigns(price) {
    if (price > 1000) {
        return "$$$";
    } else if(price < 1000 && price > 500){
        return "$$";
    } else {
        return "$";
    }
}
const style = {
    display:'flex',
    justifyContent:'space-around'
}

function Spots() {
    const vacSpotArr = vacationSpots.map((obj, index) => <div key={index} className={obj.timeToGo.toLowerCase()}><h3>{obj.place}</h3> ${obj.price} {dollarSigns(obj.price)}</div>);


    return (
        <div style={style}>
            {vacSpotArr}
        </div>
    )
}

export default Spots;