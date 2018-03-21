var ask = require("readline-sync");
var numEnemys = 6;
var initialHitPoints = 100;
var drops = ["uselessItemOne", "uselessItemTwo", "uselessItemThree", "uselessItemFour", "uselessItemFive"]



console.log('\033c');
var greet = "Greetings travler…\nWelcome to the country of UnnamedLand.\n\nWhat shall I call you?\n\t";
var name = ask.question(greet);

function Player(player) {
    this.name = player;
    this.hitPoints = initialHitPoints;
    this.enemysKilled = 0;
    this.chicken = 0;
    this.turns = 0;
    this.inventory = []
}

player = new Player(name);

var giveRandom = function () {
    player.inventory.push(drops[Math.floor(Math.random() * drops.length)])
}

var Enemy = function () {
    this.type = getRandomType();
    this.hitPoints = this.genHitPoints(this.type);
    this.defense = this.hitPoints * 3;
}

function getRandomType() {
    var enemyTypes = ["Ancient Dragon", "Panther", "Cobra"];
    var randIndex = Math.floor(Math.random() * enemyTypes.length);
    return enemyTypes[randIndex];
}

Enemy.prototype.genHitPoints = function (type) {
    switch (type) {
        case "Ancient Dragon":
            return Math.floor(Math.random() * 21) + 80;
        case "Panther":
            return Math.floor(Math.random() * 30) + 50;
        case "Cobra":
            return Math.floor(Math.random() * 30) + 20;
    }
}
var enemys = [];
for (var i = 0; i < numEnemys; i++) {
    enemys.push(new Enemy);
}

function panther() {
    var panther = `
                             ..,co88oc.oo8888cc,..
o8o.               ..,o8889689ooo888o"88888888oooc..
.88888             .o888896888".88888888o'?888888888889ooo....
a888P          ..c6888969""..,"o888888888o.?8888888888"".ooo8888oo.
088P        ..atc88889"".,oo8o.86888888888o 88988889",o888888888888.
888t  ...coo688889"'.ooo88o88b.'86988988889 8688888'o8888896989^888o
888888888888"..ooo888968888888  "9o688888' "888988 8888868888'o88888
""G8889""'ooo888888888888889 .d8o9889""'   "8688o."88888988"o888888o .
         o8888'""""""""""'   o8688"          88868. 888888.68988888"o8o.
         88888o.              "8888ooo.        '8888. 88888.8898888o"888o.
         "888888'               "888888'          '""8o"8888.8869888oo8888o .
    . :.:::::::::::.: .     . :.::::::::.: .   . : ::.:."8888 "888888888888o
                                                      :..8888,. "88888888888.
                                                      .:o888.o8o.  "866o9888o
                                                       :888.o8888.  "88."89".
                                                      . 89  888888    "88":.
                                                      :.     '8888o
                                                       .       "8888..
                                                                 888888o.
                                                                  "888889,
                                                           . : :.:::::::.: :.
`;
    return console.log(panther);
}


var dragon = function () {
    var drg = `
    ,   ,
    $,  $,     ,
    "ss.$ss. .s'
      .ss$$$$$$$$$$s,
   s$$$$$$$$$$$$$$\`$$Ss
"$$$$$$$$$$$$$$$$$$o$$$       ,
s$$$$$$$$$$$$$$$$$$$$$$$$s,  ,s
s$$$$$$$$$"$$$$$$""""$$$$$$"$$$$$,
s$$$$$$$$$$s""$$$$ssssss"$$$$$$$$"
s$$$$$$$$$$'         \`"""ss"$"$s""
s$$$$$$$$$$,              \`"""""$  .s$$s
s$$$$$$$$$$$$s,...               \`s$$'  \`

    `;
    return console.log(drg);
}
var cobra = function () {
    var cob = `
     _________         _________
    /         \\       /         \\   
   /  /~~~~~\\  \\     /  /~~~~~\\  \\  
   |  |     |  |     |  |     |  |
   |  |     |  |     |  |     |  |
   |  |     |  |     |  |     |  |         /
   |  |     |  |     |  |     |  |       //
  (o  o)    \\  \\_____/  /     \\  \\_____/ /
   \\__/      \\         /       \\        /
    |         ~~~~~~~~~         ~~~~~~~~
    ^
    `;
    return console.log(cob);
}

var fight = function (enemyCurrent, winHealth) {
    var hit = Math.floor(Math.random() * (player.hitPoints / 2));
    var damage = Math.floor(Math.random() * (enemyCurrent.hitPoints / 2));
    enemyCurrent.hitPoints -= hit;
    player.hitPoints -= damage;
    if (player.hitPoints < 1) {
        return true
    }
    if (enemyCurrent.hitPoints < 1) {
        console.log(`You killed the ${enemyCurrent.type} and recieved ${winHealth} health`);
        player.enemysKilled++;
        player.hitPoints += winHealth;
        giveRandom();
        return true;
    } else {
        console.log(`The ${enemyCurrent.type} still has ${enemyCurrent.hitPoints} hitPoints!\n Your hitPoints are down to ${player.hitPoints}`);
    }
}
var flee = function (enemyCurrent) {
    if (Math.random() > 0.40) {
        console.log("You got away!");
        player.chicken++;
        return true;
    } else {
        var damage = Math.floor(Math.random() * (enemyCurrent.hitPoints / 2));
        player.hitPoints -= damage;
        console.log(`You were attacked as you tried to escape\nYour health is now at ${player.hitPoints}`);
    }
}
var inventory = function () {
    statusBar = `${player.name}\t Life : ${player.hitPoints}\tPOINTS : ${player.enemysKilled}\tESCAPED : ${player.chicken}\t:TURNS : ${player.turns}`;
    console.log('\033c');
    console.log(statusBar);
    console.log(underline.join(''));
    console.log(player.inventory.join());
}


var quit = function () {
    console.log('\033c');
    console.log(`\nQUIT\n`);
    player.hitPoints = 0;
}

var explore = function () {
    statusBar = `${player.name}\t Life : ${player.hitPoints}\tPOINTS : ${player.enemysKilled}\tESCAPED : ${player.chicken}\t:TURNS : ${player.turns}`;
    var directionArray = ["north", "east", "south", "west"];
    var direction = directionArray[Math.floor(Math.random() * directionArray.length)]
    player.turns++;
    console.log('\033c')
    console.log(statusBar);
    console.log(underline.join(''))
    console.log(`\nYou travel ${direction} for a time…\n`);



    if (Math.random() > 0.50) {

        var enemyCurrent = enemys.indexOf(enemys[player.enemysKilled + player.chicken])
        switch (enemys[enemyCurrent].type) {
            case 'Ancient Dragon':
                dragon();
                //console.log(`\nYou found an dragon and killed it!\n`);
                break;
            case 'Panther':
                panther();
                // console.log(`\nYou found a panther and killed it!\n`);
                break;
            case 'Cobra':
                cobra();
                // console.log(`\nYou found a cobra and killed it!\n`);
                break;
        }
        // add battle here
        var action = false;
        var gotAway = false;
        var winHealth = enemys[player.enemysKilled + player.chicken].hitPoints
        while (!action || !gotAway) {
            var action = ask.keyIn("F̲ight or R̲un\n\t");
            if (action === "f" || action === "F") {
                gotAway = fight(enemys[enemyCurrent], winHealth)
            } else if (action === "r" || action === "R") {
                gotAway = flee(enemys[enemyCurrent])
            } else {
                action = false;
            }
        }
    } else {
        console.log(`\nYou find nothing significant.\n`);
    }
}

console.log('\033c')
var statusBar = `${player.name}\t Life : ${player.hitPoints}\tPOINTS : ${player.enemysKilled}\tTURNS : ${player.turns}`;
var underline = ["\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500", "\u2500"];
for (var i = 0; i < statusBar.length; i++) {
    underline.push('\u2500')
}
console.log(statusBar);
console.log(underline.join(''))
//var action = ask.keyIn(`What do you want to do?\nE̲xplore\nQ̲uit`);
while (player.enemysKilled + player.chicken < enemys.length && player.hitPoints > 0) {
    var action = ask.keyIn(`\nWhat do you want to do now?\n\nE̲xplore\nQ̲uit\nI̲nventory`);
    switch (action) {
        case "q":
            quit();
            break;
        case "Q":
            quit();
            break;
        case "w":
            explore();
            break;
        case "W":
            explore();
            break;
        case "e":
            explore();
            break;
        case "E":
            explore();
            break;
        case "i":
            inventory();
            break;
        case "I":
            inventory();
            break;
        default:
            explore();
    }




}
var outcome;
if (player.hitPoints < 1) {
    outcome = "\033c" + `\n ${player.name} is now a corpse!\n\n\n\n\n\n\n`
} else {
    outcome = '\033c' + `You killed ${player.enemysKilled} and ran from ${player.chicken}\n`
    if (player.chicken === 0) {
        outcome += "You killed them all! Someone call the ASPCA!\n"
    } else if (player.enemysKilled === 0) {
        outcome += "You ran away at every turn, are you a 🐔\n"
    }
}

console.log(outcome, "\nYour inventory is as follows:\n",player.inventory.join());