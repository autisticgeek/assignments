var ask = require('readline-sync');
var data = {};
var run = function () {
    var anotherOne = true;
    while (anotherOne) {
        data.num1 = ask.questionFloat("Give me the first number.\n");
        data.num2 = ask.questionFloat("Give me the second number.\n");
        var opps = ["+", "-", "·", "÷"]
        data.opp = opps[ask.keyInSelect(opps)];
        var result = doThisThing(data.num1, data.num2, data.opp);
        if (result === "Ok bye") {
            anotherOne = false;
            return result;
        } else {
            console.log(result);
        }
        anotherOne = ask.keyInYN("Would you like to do another?");
    }
}

var add = function (num1, num2) {
    return num1 + num2;
}
var multiply = function (num1, num2) {
    return num1 * num2;
}
var divide = function (num1, num2) {
    return num1 / num2;
}
var subtract = function (num1, num2) {
    return num1 - num2;
}
var doThisThing = function (num1, num2, opp) {
    var result;
    switch (opp) {
        case undefined:
            result = "Ok bye"
            break;
        case "+":
            result = add(num1, num2);
            anotherOne = false
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "·":
            result = multiply(num1, num2);
            break;
        case "÷":
            result = divide(num1, num2);
            break;
    }
    if (opp !== undefined) {
        return `${num1} ${opp} ${num2} = ${result}`;
    } else {
        return result
    }
}


console.log(run());