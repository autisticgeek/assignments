var data = {};
var countInstanceInString = function (str) {
    var sorted = [];
    for (var i = 0; i < str.length; i++) {
        var c = str[i];
        if (data.hasOwnProperty(c)) {
            data[c]++;
        } else {
            data[c] = 1;
        }
    }
    // OPTIONAL SORT
    for (var letter in data) {
        sorted.push([letter, data[letter]])
    }
    sorted.sort(function (a, b) {
        return b[1] - a[1];
    });
    return sorted;
}

var phrase = 'The quick brown fox jumps over the lazy dog';
console.log(countInstanceInString(phrase));