var ask = require("readline-sync");

// Write a function that takes an array of numbers and returns the largest (without using Math.max())
var highestNum = function (arr) {

    var highest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (highest < arr[i]) {
            highest = arr[i];
        }
    }
    return highest;
}
var numArray = ask.question("\n\nGive me your numbers seperated by commas.\n").replace(/\s/g, '').split(",");
console.log(highestNum(numArray));


// Write a function that takes an array of words and a character and return each word that has that letter present.

var checkArrayForLetter = function (arr, c) {
    var data = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].includes(c)) {
            data += `${arr[i]} `;
        }
    }
    if (data === "") {
        data = `I did not find the letter ${c} in these words\n`;
    } else {
        data = `I found: ${data}\n`;
    }
    return data
}
var c = ask.question("\n\nWhat letter do you want me to look for?\n")
var wordArray = ask.question(`\nWhat words would you like me to check for the letter ${c} \nPlease seperate by spaces\n`).split(" ");
console.log(checkArrayForLetter(wordArray, c));


// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
var willItDevide = function (num1,num2){
    var data
    if(num1 % num2 ===0){
        data = `${num1} is devisable by ${num2} because ${num2}*${num1/num2} is ${num1}`;
    } else {
        data = `${num1} is NOT directly devisable by ${num2} because ${num1} ÷ ${num2} = ${num1/num2}`;
    }
    return data
}
var num1 = ask.questionInt("What is the dividend?\n");
var num2 = ask.questionInt("What is the divisor\n")
console.log(willItDevide(num1,num2));