// https://coursework.vschool.io/multiple-array-methods-practice-1/
// Day 14
// 16 Mar 2018

people = [{
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
}, {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
}, {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
}, {
    firstName: "Morty",
    lastName: "Smith",
    age: 13
}, {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
}];


function isOldEnough(obj) {
    return obj.age > 17;
}

function byAlpha(a, b) {
    ln1 = a.lastName;
    ln2 = b.lastName;
    console.log(ln1.localeCompare(ln2));
    return ln1.localeCompare(ln2)

}

function sortedofAge(arr) {
    return arr.filter(isOldEnough).sort(byAlpha)
}

console.log(sortedofAge(people));


function sortAge(person1, person2) {
    age1 = person1.age;
    age2 = person2.age
    console.log(age2 - age1);
    return age2 - age1;
}

function addLi(a) {
    return `<li>${a.firstName} ${a.lastName} ${a.age}</li>`;
}

function peopleSortedByAge(arr) {
    var temp = arr.sort(sortAge).map(addLi);
    return temp
}
console.log(peopleSortedByAge(people))