var stripNonAlpha = function (str) {
    return str.toLowerCase().replace(/[^a-z]/g, '');
}

var isPalindrome = function (str) {
    var temp = stripNonAlpha(str);
    return temp === temp.split('').reverse().join('')
}

console.log(isPalindrome("daD"));