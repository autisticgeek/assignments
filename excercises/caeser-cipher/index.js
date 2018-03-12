var ask = require("readline-sync");
var caeserShift = function (str, num) {
    var data = "";
    var alpfa = "abcdefghijklmnopqrstuvwxyz".split('');

    for (var i = 0; i < str.length; i++) {
        var c
        if (str.charCodeAt(i) !== 32) {
            if (str.charCodeAt(i) + num > 122) {
                c = str.charCodeAt(i) - 26;
            } else {
                c = str.charCodeAt(i);
            }
            var n = String.fromCharCode(c + num);
            data += n;
        } else {data+=" "}

    }

    return `\n${data}\n`;
}
var input = ask.question('\nWhat phrase would you like to encrypt?\n').toLowerCase();  
var shift = parseInt(ask.question('\nHow many letters would you like to shift?\n')); 
// var input = "hi there";
// var shift = 15;
console.log(caeserShift(input, shift))