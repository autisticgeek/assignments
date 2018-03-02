// Loop through the following array and count how many "computers" there are. Log the final count:
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];
numComputers = 0;
for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        numComputers++;
    }
}
console.log(numComputers);

// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.
var peopleWhoWantToSeeMadMaxFuryRoad = [{
    name: "Mike",
    age: 12,
    gender: "male"
}, {
    name: "Madeline",
    age: 80,
    gender: "female"
}, {
    name: "Cheryl",
    age: 22,
    gender: "female"
}, {
    name: "Sam",
    age: 30,
    gender: "male"
}, {
    name: "Suzy",
    age: 4,
    gender: "female"
}]
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 17) {
        if (peopleWhoWantToSeeMadMaxFuryRoad.gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let HIM in.");
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let HER in.");
        }
    } else {
        if (peopleWhoWantToSeeMadMaxFuryRoad.gender === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. SHE'S good to see Mad Max Fury Road.");
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. HE'S good to see Mad Max Fury Road.");
        }
    }



}


//bonus
var light = false;
var sourceArray = [2, 5, 435, 4, 4]
for (var h = 0; h < sourceArray.length; h++) {
    for (i = sourceArray[h]; i > 0; i--) {
        light === false ? light = true : light = false;
    }
}
light === false ? console.log("Light is off") : console.log("Light is on");