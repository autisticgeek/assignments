 var input = "bookkeeper larry";

var duplicates = function (str) {
    var output = {
        unique: "",
        extras: ""
    }
    for (var i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) == i) {
            output.unique += str[i];
        } else {
            output.extras += str[i];
        }
    }
    return output;
}
console.log(duplicates(input));
// No duplicates: "bokepr lay"
// The Extras: "okeerr"