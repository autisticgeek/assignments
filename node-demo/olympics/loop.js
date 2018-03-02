// Write a for loop that prints to the console the numbers 0 through 9.
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// Write a for loop that prints to the console 9 through 0.
for (var i = 9; i >= 0; i--) {
    console.log(i);
}

// Write a for loop that prints these fruits to the console. 
var fruit = ["banana", "orange", "apple", "kiwi"]
for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

// Write a for loop that will push the numbers 0 through 9 to an array.
var numArray = [];
for (var i = 0; i < 10; i++) {
    numArray.push(i);
}
console.log(numArray);

// Write a for loop that prints to the console only even numbers 0 through 100.
for (var i = 0; i < 101; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Write a for loop that will push every other fruit to an array. 
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var fruitArray = [];
for (var i = 0; i < fruit.length; i += 2) {
    fruitArray.push(fruit[i]);
}
console.log(fruitArray);

// Write a loop that will print out all the names of the people of the people array
var names = ["Jen", "Cat", "Lelana", "randomName"];
for(var i=0;i< names.length;i++){
    console.log(names[i]);
}

// Write a loop that pushes the names into a names array, and the occupations into an occupations array
var people = [
    {
        name: "Sidney",
        occupation: "Gambler"
    },
    {
        name: "Athena",
        occupation: "Supervisor"
    },
    {
        name: "Charity",
        occupation: "Sleep Study Tenicition"
    }
]
var names = [];
var occupations = [];
for(var i=0; i< people.length;i++){
    names.push(people[i].name);
    occupations.push(people[i].occupation);
}
console.log(names);
console.log(occupations);

// Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer"
var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

var names = [];
var occupations = [];
for (var i = 0; i < peopleArray.length; i++) {
    if (i % 2 === 0) {
        names.push(peopleArray[i].name);
    } else {
        occupations.push(peopleArray[i].occupation);
    }
}
console.log(names);
console.log(occupations);

// Create an array that mimics a grid like the following using for loops:
var gridArray = [];
for (var h = 0; h < 3; h++) {
    gridArray.push([]);
    for (var i = 0; i < 3; i++) {
        gridArray[h][i] = 0;
    }
}
console.log(gridArray);

// Create an array that mimics a grid like the following using for loops
var gridArray= [];
for(var h=0;h<3;h++) {
    gridArray.push([]);
    for(var i=0;i<3;i++){
        gridArray[h][i] = h;
    }
}
console.log(gridArray);

//Create an array that mimics a grid like the following using for loops
var gridArray= [];
for(var h=0;h<3;h++) {
    gridArray.push([]);
    for(var i=0;i<3;i++){
        gridArray[h][i] = i;
    }
}
console.log(gridArray);

// Given a grid like the previous ones, write a for loop that would change every number to an x.
var gridArray= [];
for(var h=0;h<3;h++) {
    gridArray.push([]);
    for(var i=0;i<3;i++){
        gridArray[h][i] = "x";
    }
}
console.log(gridArray);


