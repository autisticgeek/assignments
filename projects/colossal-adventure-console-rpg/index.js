var ask = require("readline-sync");
var numEnemys = 6;
var data = {};
data.enemys = createEnemies(numEnemys);
data.player.enemysKilled = 0;
data.player.hitPoints = 100;

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

function createEnemies(num) {
    for (var i = 0; i < num; i++) {
        console.log(new Enemy);
    }
}

function quit() {
    player.hitPoints = 0;
}

function explore() {
    console.log(`walking about`);
}



var greet = "\n\nGreetings travler…\nWelcome to the country of Smalland.\n\nWhat shall we call you?\n\t";
var playerName = ask.question(greet);
data.player.name = playerName;




while (data.player.hitPoints > 0 || data.player.enemysKilled >= numEnemys) {
    var action = ask.question(`Well ${data.player.name}… What do you want to do?\n\tExplore\n\tQuit`);
    switch (action) {
        case q:
            quit();
            break;
        case Q:
            quit();
            break;
        case e:
            explore();
            break;
        case E:
            explore();
            break;
    }

}
var outcome;
if (data.player.hitPoints <= 0) {
    outcome = `Wat!`
}
if (data.player.enemysKilled >= numEnemys) {
    outcome = `You killed them all!  Someone call the ASPCA!`
}
console.log(outcome);



console.log(data);