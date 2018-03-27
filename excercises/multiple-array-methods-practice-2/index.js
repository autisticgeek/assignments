// Create an array of everyone that has at least one dog and sort it by age.
function sortedDogOwners(arr) {
    return arr.filter(person => person.pets.includes("dog")).sort((person1, person2) => person1.age - person2.age)
}

// console.log(sortedDogOwners([
//     {
//         firstName: "Sarah",
//         lastName: "Palin",
//         age: 47,
//         pets: ["dog", "cat"]
//     },
//     {
//         firstName: "Frank",
//         lastName: "Zappa",
//         age: 12,
//         pets: ["dog"]
//     },
//     {
//         firstName: "Rick",
//         lastName: "Sanchez",
//         age: 78,
//         pets: ["cat", "parrot"]
//     },
//     {
//         firstName: "Morty",
//         lastName: "Smith",
//         age: 13,
//         pets: ["cat", "parrot", "dog"]
//     },
//     {
//         firstName: "Kyle",
//         lastName: "Mooney",
//         age: 27,
//         pets: ["dog"]
//     }
// ]))



//Create an array of strings of pets first names in <li>s if their owner is older than 20 and all the owners pets have nicknames, and they have at least one dog.
function arbitraryPractice(arr) {
    return arr.filter(person => person.age > 20 && person.pets.every(pet => pet.nickNames.length > 0) && person.pets.some(pet =>pet.type === "dog")).reduce((output,person) =>[...output, ...person.pets.map(pet =>`<li>${pet.name}</li>`)], [])

}

console.log(arbitraryPractice([
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: [
            {
                name: "Alfred",
                type: "dog",
                nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
            },
            {
                name: "Charles",
                type: "cat",
                nickNames: ["Charley"]
            },
            {
                name: "Bark Obama",
                type: "dog",
                nickNames: ["Barack", "Mr. President"]
            },
            {
                name: "Christopher George Latore Wallace",
                type: "dog",
                nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
            }

        ]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: [
            {
                name: "Howard",
                type: "dog",
                nickNames: []
            },
            {
                name: "Bear",
                type: "dog",
                nickNames: []
            }
        ]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: [
            {
                name: "Bird Person",
                type: "bird",
                nickNames: ["Phoenixperson"]
            },
            {
                name: "Krombopulos Michael",
                type: "Gromflomite",
                nickNames: ["Assassin man"]
            },
            {
                name: "Squanchy",
                type: "Cat-person",
                nickNames: ["Squanch", "Smarf", "Thunder Cat"]
            }

        ]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 23,
        pets: [
            {
                name: "Morty Jr.",
                type: "Gazorpazorp",
                nickNames: ["Gwendolyn Jr."]
            },
            {
                name: "Snuffels",
                type: "dog",
                nickNames: ["Snowball"]
            }

        ]
    }
]));