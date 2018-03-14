var data = {};
var goomba = document.getElementById("goombas");
var goombaCost = document.getElementById("goombaCost");
var bobs = document.getElementById("bobombs");
var bobCost = document.getElementById("bobCost");
var cheep = document.getElementById("cheepcheeps");
var cheepCost = document.getElementById("cheepCost");
var totalCost = document.getElementById("total");

var setGoomba = function (event) {
    data.goombas = event.target.value;
    goombaCost.value = data.goombas * 5;
    setTotal();
}
var setBob = function (event) {
    data.bobs = event.target.value;
    bobCost.value = data.bobs * 7;
    setTotal();
}
var setCheep = function (event) {
    data.cheeps = event.target.value;
    cheepCost.value = data.cheeps * 11;
    setTotal();
}
var setTotal = function () {
    var goomba = parseInt(goombaCost.value);
    var bob = parseInt(bobCost.value);
    var cheep = parseInt(cheepCost.value);
    totalCost.value = goomba + bob + cheep;
}

goomba.addEventListener("input", setGoomba);
bobs.addEventListener("input", setBob);
cheep.addEventListener("input", setCheep);


document.getElementById('url').innerHTML = '<a href="' + window.location.href + '">' + window.location.href + '</a>';