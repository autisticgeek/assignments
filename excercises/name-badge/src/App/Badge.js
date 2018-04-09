import React from "react";

export default function Badge(props) {
    console.log(props)
    const {givenName, familyName, email, PoB, phone, food, about, color} = props
    const colorArr=["red", "blue"]
    const badgeColor = `${colorArr[Math.floor(color%2)]}`
    console.log(badgeColor)
    return (
        <div className="badge">
            <div className="head" style={{backgroundColor:badgeColor}}>BADGE</div>
            <div>Name: {givenName} {familyName}</div>
            <div>Phone: {phone}</div>
            <div>Place of birth: {PoB}</div>
            <div>Favorite food: {food}</div>
            <div>Email: {email}</div>
            <div className="about">{about}</div>
            

        </div>
    )
}