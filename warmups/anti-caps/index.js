var antiCaps = function (str) {
    var data="";
    for (var i = 0; i < str.length; i++) {
        if (isCaps(str[i])) {
            data += str[i].toLowerCase();
        } else {
            data += str[i].toUpperCase()
        }
    }
    return data;
}

var isCaps = function (letter) {  
    return letter === letter.toUpperCase();
  }
console.log(antiCaps("racEcar"));