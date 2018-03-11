var form = document.getElementsByTagName('form')[0];
var fName = document.getElementsByName("fName");
var lName = document.getElementsByName("lName")[0];
var age = document.getElementsByName("age")[0];
var gender = document.getElementsByName("gender")[0];
var dest = document.getElementsByName("dest")[0];
var vegetarian = document.getElementsByName("vegetarian")[0];
var kosher = document.getElementsByName("kosher")[0];
var lactoseFree = document.getElementsByName("lactoseFree")[0];

data = {
    food: []
};
var givenName = function (event) {
    data.givenName = event.target.value;
}
var givenName = function (event) {
    data.givenName = event.target.value;
}
var familyName = function (event) {
    data.familyName = event.target.value;
}
var age = function (event) {
    data.age = event.target.value;
}
var gender = function (event) {
    data.gender = event.target.value;
}
var dest = function (event) {
    data.dest = event.target.value;
}
var food = function (event) {
    if (event.target.checked) {
        data.food.push(event.target.name);
    } else {
        data.food.splice(data.food.indexOf(event.target.name), 1);
    }
}
var submitForm = function (event) {
    event.preventDefault();
    alert("Name: "+data.givenName+" "+(data.familyName)+"\nAge: "+data.age+"\nGender: "+data.gender+"\nDestination: "+data.dest+"\nFood Prefrence: "+ data.food.join(", "));
}


fName[0].addEventListener("input", givenName);
document.getElementsByName("lName")[0].addEventListener("input", familyName);
document.getElementsByName("age")[0].addEventListener("input", age);
document.getElementsByName("gender")[0].addEventListener("change", gender);
document.getElementsByName("gender")[1].addEventListener("change", gender);
document.getElementsByName("gender")[2].addEventListener("change", gender);
document.getElementsByName("dest")[0].addEventListener("change", dest);
document.getElementsByName("vegetarian")[0].addEventListener("change", food);
document.getElementsByName("kosher")[0].addEventListener("change", food);
document.getElementsByName("lactoseFree")[0].addEventListener("change", food);
document.getElementById("theForm").addEventListener("submit", submitForm);