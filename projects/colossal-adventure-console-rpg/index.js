var ask = require("readline-sync");
var numEnemys = 6;
var initialHitPoints = 100;



console.log('\033c')
var greet = "Greetings travler…\nWelcome to the country of Smalland.\n\nWhat shall we call you?\n\t";
var name = ask.question(greet);

function Player(player) {
    this.name = player;
    this.hitpoints = initialHitPoints;
    this.enemysKilled = 0;
}
player = new Player(name);

var Enemy = function () {
    this.type = getRandomType();
    this.hitPoints = this.genHitPoints(this.type);
    this.defense = this.hitPoints * 3;
}

function getRandomType() {
    var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
    var randIndex = Math.floor(Math.random() * enemyTypes.length);
    return enemyTypes[randIndex];
}

Enemy.prototype.genHitPoints = function (type) {
    switch (type) {
        case "Ancient Dragon":
            return Math.floor(Math.random() * 21) + 80;
        case "Prowler":
            return Math.floor(Math.random() * 30) + 50;
        case "Mighty Grunt":
            return Math.floor(Math.random() * 30) + 20;
    }
}
var enemys = [];
for (var i = 0; i < numEnemys; i++) {
    enemys.push(new Enemy);
}

var quit = function () {
    console.log(`\nQUIT\n`);
    player.hitpoints = 0;
}

var explore = function () {
    console.log(`\nwalking about…\n`);
    if (Math.random > 0.75) {
        console.log(`\nYou Found an ememy and killed it!\n`);
        player.enemysKilled++;
        console.log(player.enemysKilled);
    }
}

console.log('\033c')
var forceOut = 0;
while (player.enemysKilled != enemys.length && player.hitpoints >= 1 && forceOut != 20) {

    
    console.log(`${player.name}\t Life : ${player.hitpoints}\tPOINTS : ${player.enemysKilled}`);
    var action = ask.question(`What do you want to do?\n\t(E)xplore\n\t(Q)uit\n\t`);
    switch (action) {
        case "q":
            quit();
            break;
        case "Q":
            quit();
            break;
        case "e":
            explore();
            break;
        case "E":
            explore();
            break;
    }
    console.log('\033c')
    forceOut++;

}
var outcome;
if (player.hitpoints < 1) {
    outcome = `Wat! ${player.name} is now a crispy corpse!\n\n\n\n\n\n\n`
}
if (player.enemysKilled === enemys.length) {
    outcome = `You killed them all!  Someone call the ASPCA!\n\n\n\n\n\n\n`
}
console.log(outcome);