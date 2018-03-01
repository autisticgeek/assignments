// Preliminaries
var x = 5;
var y = 3;
if (x > y) {
    console.log(x + " is greater than " + y);
}
var pet = "cat";
if (pet.length === 3) {
    console.log(pet.length + " is the length")
}

if ("cat" === "dog") {
    console.log("They are the same");
} else {
    console.log("not the same");
}

// Bronze Medal
var person = {
    name: "Bobby",
    age: 12
}
// age only
if (person.age > 18) {
    console.log(person.name + " can go to go to the movie.");
} else {
    console.log(person.name + " is not allowed to go to the movie.");
}

// Only "B" considered
if (person.name.startsWith("B")) {
    console.log(person.name + " can go to go to the movie.");
} else {
    console.log(person.name + " is not allowed to go to the movie.");
}

// Both age and first letter in the name is considered
if (person.age > 18 && person.name.startsWith("B")) {
    console.log(person.name + " can go to go to the movie.");
} else {
    console.log(person.name + " is not allowed to go to the movie.");
}

// Silver Metal
if (1 === "1") {
    console.log("strict");
} else if (1 == "1") {
    console.log("abstract");
} else {
    console.log("not equal at all");
}

if (1 <= 2 && 2 === 4) {
    console.log("yes on 1&2");
}

if (((3 * 4) > 10) && ((5 + 10) > 10)) {
    console.log("yes on the OR");
}

//  Gold Metal
if ((typeof "dog") === "string") {
    console.log(typeof "dog");
}
if ((typeof "true") === "boolean") {
    console.log(typeof true);
}
if ((typeof red) === "undefined") {
    console.log(typeof red);

}
var letter= "t";
var num = 12;
if (letter > num) {
    console.log(letter +" is greater than "+ num);
} else {
    console.log(letter +" is less than "+ num);
}


myNum = 78;
Number.isInteger(myNum / 2) ? console.log(myNum +" is even") : console.log(myNum +" is odd");