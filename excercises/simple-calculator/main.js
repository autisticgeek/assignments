var insert = function () {
    event.preventDefault();
    var x = this.children[0].value;
    var y = this.children[1].value;
    var e = this.children[2].value;
    document.getElementById("answers").innerHTML += '<h1>' + operation(e, x, y) + '</h1>';
    this.reset();
}

var operation = function (e, x, y) {
    var equ;
    switch (e) {
        case "ADD":
            equ = add(x, y);
            break;
        case "SUBTRACT":
            equ = subtract(x, y);
            break;
        case "MULTIPLY":
            equ = multiply(x, y);
            break;
    }
    return equ;
}

var add = function (x, y) {
    var xvar = x;
    x = parseInt(x, 10);
    var yvar = y;
    y = parseInt(y, 10);
    var sum = x + y;
    return xvar + " + " + yvar + " = " + sum;
}

var subtract = function (x, y) {
    var xvar = x;
    x = parseInt(x, 10);
    var yvar = y;
    y = parseInt(y, 10);
    var sum = x - y;
    return xvar + " - " + yvar + " = " + sum;
}

var multiply = function (x, y) {
    var xvar = x;
    x = parseInt(x, 10);
    var yvar = y;
    y = parseInt(y, 10);
    var sum = x * y;
    return xvar + " · " + yvar + " = " + sum;
}

document.getElementById("addForm").addEventListener("submit", insert);
document.getElementById("subForm").addEventListener("submit", insert);
document.getElementById("multForm").addEventListener("submit", insert);