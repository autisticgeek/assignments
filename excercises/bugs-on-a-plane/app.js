var form = document.getElementById('airline-form');
var submit = document.getElementById('submit');
// var query = document.querySelector;  What is this:?


function formAlert(event) {
    event.preventDefault;
    var gender = document.getElementById("gender");
    var firstName = form.elements[0].value;
    var lastName = form.elements[1].value;
    var age = form.elements[2].value;
    var gender;
    for (var i = 0; i < document.getElementsByName('gender').length; i++) {
        if (document.getElementsByName('gender')[i].checked) {
            gender = document.getElementsByName('gender')[i].value;
        }
    }
    var location = form.elements[6].value;
    var diet = [];
    if (document.getElementById("vegan").checked) {diet.push("vegan");}
    if (document.getElementById('gluten').checked) {diet.push("gluten");}
    if (document.getElementById('paleo').checked) {diet.push("paleo")}
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);