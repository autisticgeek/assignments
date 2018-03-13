// /Users/student/Desktop/dev/assignments/excercises/escape-room

var ask = require("readline-sync");
var alive = true;
var key = false;
var canDo = ["Put hand in hole", "Look for the key", "Try to open the door"];
var name = ask.question("What is your name?\n");
var die = "\nYou feel sudden sharp pain and then nothing. You withdraw your arm to find you no longer have your hand. You pass out and then bleedout.\n\n YOU ARE DEAD"

var opener = "\n\nYou wake up in a dimmly lit room. The room is absoultly filthy and the smell is awful. The cement walls that surround you are only intrupred by a steal door on one side and a hole about 4 inches in diameter on the other."
var text;
console.log(opener);
while (alive) {
    var yourMove = canDo[ask.keyInSelect(canDo)];
    switch (yourMove) {
        case undefined:
            text = "\nThere os no escape. Try something else!\n";
            break;
        case "Put hand in hole":
            text = die;
            alive = false;
            break;
        case "Look for the key":
            if (!key) {
                var chance = Math.floor(Math.random() * 2);
                if (chance === 1) {
                    key = true;
                    text = "You found a key!";
                } else {
                    text = "\nYour search for a key was unsucessful this time.\n"
                }
            } else{ text="\nYou already have a key"}
            break;
        case "Try to open the door":
            if (!key) {
                text = "\nIt's locked!\n";
            } else {
                text = `\nThe door screaches as you open it.\n\n${name} has escaped.`;
                alive = false;
            }
            break;
    }
    console.log(text);
}