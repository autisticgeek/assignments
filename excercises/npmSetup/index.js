var rs = require("readline-sync");

var longStrLastHalf = function (str) {
    var tempStr
    if (str.length >= 20) {
        tempStr = str.substr(Math.floor(str.length / 2));
    } else {
        tempStr = "Sorry, the string was not long enough.";
    }
    data.fullStr = str;
    return tempStr;
}

var customPosition = function (num, str) {
    var tempStr
    tempStr = str.substr(num);
    return tempStr;
}



var data = {};
data.givenName = rs.question("What is your name? ").toUpperCase();
data.age = rs.questionInt("How old are you? ");
var colors = ["Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Indigo", "Violet"];
data.color = colors[rs.keyInSelect(colors, "Pick a color:")];
data.randomStrLength = rs.question("Give me a string to count. ").length;
data.concatinatedStr = rs.question("First part of string to put together: ").concat(" " + rs.question("Second part of string: "));
data.longStrLastHalf = longStrLastHalf(rs.question("Give me a string of twenty or more characters: "));
data.customLength = customPosition(rs.questionInt("Where would you like that cut? It was " + data.fullStr.length + " characters long."), data.fullStr)

// console.log(data);
var report = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nHello " + data.givenName + "!\n\nYou said you were " + data.age + " years old.\n\nYou picked the color:\n\t" + data.color + "\n\nHere is your concatinated string:\n\t" + data.concatinatedStr + "\n\nHere is what I stored when I asked you to type a 20+ character string\n\t" + data.fullStr + "\n\nHere is that cut in half if it was 20+ characters long.\n\t" + data.longStrLastHalf + "\n\nAnd here is what is left after you decided where to cut it.\n\t" + data.customLength + "\n\n";
console.log(report);

rs.keyInYN