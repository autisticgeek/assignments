var ask = require("readline-sync");
var greet = "\n\nGreetings travler…\nWelcome to the country of Smalland.\n\nWhat shall we call you?\n\t";
var playerName = ask.question(greet);

var player = {
    name: playerName
}
console.log(player);