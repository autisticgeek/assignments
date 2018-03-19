var ask = require("readline-sync");
var numEnemys = 6;
var initialHitPoints = 100;



console.log('\033c')
var greet = "Greetings travler…\nWelcome to the country of UnnamedLand.\n\nWhat shall I call you?\n\t";
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
    var enemyTypes = ["Ancient Dragon", "Panther", "Mighty Grunt"];
    var randIndex = Math.floor(Math.random() * enemyTypes.length);
    return enemyTypes[randIndex];
}

Enemy.prototype.genHitPoints = function (type) {
    switch (type) {
        case "Ancient Dragon":
            return Math.floor(Math.random() * 21) + 80;
        case "Panther":
            return Math.floor(Math.random() * 30) + 50;
        case "Mighty Grunt":
            return Math.floor(Math.random() * 30) + 20;
    }
}
var enemys = [];
for (var i = 0; i < numEnemys; i++) {
    enemys.push(new Enemy);
}
function panther(){
var panther = `                         ..,co88oc.oo8888cc,..
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
return console.log(panther);}


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
var fight = function()


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

        
        switch (enemys[player.enemysKilled-1].type) {
            case 'Ancient Dragon':
                dragon();
                console.log(`\nYou found an dragon and killed it!\n`);
                break;
                case 'Panther':
                panther();
                console.log(`\nYou found a panther and killed it!\n`);
                break;
        }
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
    outcome = "\033c" + `\nWat! ${player.name} is now a crispy corpse!\n\n\n\n\n\n\n`
}
if (player.enemysKilled === enemys.length) {
    outcome = "\033c\nYou killed them all!  Someone call the ASPCA!\n\n\n\n\n\n\n"
}
console.log(outcome);