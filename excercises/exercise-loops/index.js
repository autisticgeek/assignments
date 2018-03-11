// // Write a function that accepts a string as input. Write a loop to print out each letter of that string individually.
// var strLoop = function (str) {
//     var temp = ""
//     for (var i = 0; i < str.length; i++) {
//         temp += str.charAt(i) + "\n";
//     }
//     return temp;
// }
// console.log(strLoop("Hello World"));

// // Write a function that accepts a string and a single character as inputs. Write a loop that iterates over the string, and prints the position of the first occurrence of the specified character. If the character is not found, tell that to the user.
// var findInStr = function (str, c) {
//     var found
//     for (var i = 0; i < str.length; i++) {
//         if (c === str.charAt(i)) {
//             found = `\n\nI found "${c}" at ${i+1}`;
//             break;
//         } else {
//             found = `\n\nI did not find "${c}".`
//         }
//     }
//     return found;

// }
// console.log(findInStr("Hello World", "o"));

// // Write a function that accepts an array of numbers as a parameter. Quit the function when the number 42 is found. Let the user know if 42 is not found

// var find42 = function (arr) {
//     var found
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === 42) {
//             found = `\n\nI found 42 at index [${i}] in the array`;
//             break;
//         } else {
//             found = "\n\nI did not find 42 in your array";
//         }

//     }
//     return found;
// }
// var numArr = [1, 2, 3, 4, 42, 5, 6, 7, 8, 9];
// console.log(find42(numArr));

// Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without using Math.min()

var findSmallest = function (arr) {
    if (arr.length !== 10) {
        return `\n\nI need 10 numbers.\nYou gave me ${arr.length}.`;
    }
    var smallest = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (smallest > arr[i]) {
            smallest = arr[i];
        }
    }
    return `\n\n${smallest} was the smallest number`;
}
var numArr = [55, 68, 50, 33, 72, 48, 73, 24, 58, 99];
console.log(findSmallest(numArr));