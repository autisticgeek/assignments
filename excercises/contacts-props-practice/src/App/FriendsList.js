import React from "react";
import Friend from "./Friend"

const friends = [
    {
        name: "Ben",
        age: 29,
        pets: [
            {
                name: "spot",
                breed: "tabby"
            }, {
                name: "John Johnson",
                breed: "husky"
            }, {
                name: "Bear the bear",
                breed: "Grizzly"
            }
        ]
    }, {
        name: "Bob",
        age: 31,
        pets: [
            {
                name: "Sally",
                breed: "Australian Shepard"
            }
        ]
    }, {
        name: "Marcus",
        age: 25,
        pets: [
            {
                name: "Indy",
                breed: "Akita"
            }, {
                name: "Anna",
                breed: "persian cat"
            }
        ]
    }, {
        name: "Jacob",
        age: 20,
        pets: [
            {
                name: "fluffy",
                breed: "sphynx cat"
            }, {
                name: "patches",
                breed: "sphynx cat"
            }, {
                name: "tiger",
                breed: "sphynx cat"
            }, {
                name: "oscar",
                breed: "sphynx cat"
            }
        ]
    }
]


function FriendsList() {
    const friendsList = friends.map((personObj, index) => <Friend key={personObj.name + index} {...personObj} />)
    return (
        <div>
            {friendsList}
        </div>
    )
}

export default FriendsList;