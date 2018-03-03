// Write a function that accepts two numbers as parameters, and returns the sum.
var addTwo = function (x, y) {
    return x + y;
}
console.log(addTwo(5, 5));

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
var whichIsGreater = function (x, y, z) {
    return Math.max(x, y, z);
}
console.log(whichIsGreater(5, 7, 6));

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
var evenOdd = function (x) {
    if (x % 2 === 0) {
        return "even";
    }
    return "odd";
}
console.log(evenOdd(6))
console.log(evenOdd(7))

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
var stringtastic = function (str) {
    var strLen = str.length;
    if (strLen <= 20) {
        return str + str;
    }
    return str.substring(0, (Math.floor(strLen / 2)));

}
console.log(stringtastic("hello darkness my old friend"));
console.log(stringtastic("show me the money!"));

// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
var fibonacci = function (n) {
    n--;
    var x = 1;
    var fibArray = [];
    var h, i, j;
    for (i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            fibArray[i] = i
        } else {
            fibArray[i] = fibArray[(i - 1)] + fibArray[(i - 2)]
        }

    }
    var sum = 0;
    for (i = 0; i < fibArray.length; i++) {
        sum = fibArray[i] + sum;
    }
    return sum;
}
console.log(fibonacci(9))


// Write a function to solve the quadratic equation. (It should accept three numbers as parameters, and then return an array with the resulting x values.)

var quad = function (a, b, c) {
    var xPlus = (+(Math.sqrt((4 * a * c) - (b * b))) / (2 * a));
    var xMin = (-(Math.sqrt((4 * a * c) - (b * b))) / (2 * a));
    var xArr = [xMin, xPlus];
    console.log(xArr);
}
quad(6, 11, -35);