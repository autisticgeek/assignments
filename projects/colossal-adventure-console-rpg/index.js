var ask = require("readline-sync");
var numEnemys = 6;
var initialHitPoints = 100;



console.log('\033c')
var greet = "Greetings travler…\nWelcome to the country of Smalland.\n\nWhat shall I call you?\n\t";
var name = ask.question(greet);

function Player(player) {
    this.name = player;
    this.hitpoints = initialHitPoints;
    this.enemysKilled = 0;
    this.turns = 0;
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
    console.log('\033c');
    console.log(`\nQUIT\n`);
    player.hitpoints = 0;
}

var explore = function () {
    statusBar = `${player.name}\t Life : ${player.hitpoints}\tPOINTS : ${player.enemysKilled}\tTURNS : ${player.turns}`;
    var directionArray = ["north", "east", "south", "west"];
    var direction = directionArray[Math.floor(Math.random() * directionArray.length)]
    player.turns++;
    console.log('\033c')
    console.log(statusBar);
    console.log(underline.join(''))
    console.log(`\nYou travel ${direction} for a time…\n`);
    if (Math.random() > 0.50) {
        console.log(`\nYou found an ememy and killed it!\n`);
        player.enemysKilled++;
    } else {
        console.log(`\nYou find nothing significant.\n`);
    }
    action = ask.question(`\nWhat do you want to do now?\n\nPrees q to quit\n[ENTER] or [RETURN] to continue`);
    // require('child_process').spawnSync("read _ ", {
    //     shell: true,
    //     stdio: [0, 1, 2]
    // });
}

console.log('\033c')
var statusBar = `${player.name}\t Life : ${player.hitpoints}\tPOINTS : ${player.enemysKilled}\tTURNS : ${player.turns}`;
var underline = ["\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500"];
for (var i = 0; i < statusBar.length; i++) {
    underline.push('\u2500')
}
console.log(statusBar);
console.log(underline.join(''))
var action = ask.question(`What do you want to do?\nPrees q to quit\n[ENTER] or [RETURN] to continue`);
while (player.enemysKilled != enemys.length && player.hitpoints >= 1) {




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
        default:
            explore();
    }




}
var outcome;
if (player.hitpoints < 1) {
    outcome = "\033c"+`\nWat! ${player.name} is now a crispy corpse!\n\n\n\n\n\n\n`
}
if (player.enemysKilled === enemys.length) {
    outcome = "\033c\nYou killed them all!  Someone call the ASPCA!\n\n\n\n\n\n\n"
}
console.log(outcome);