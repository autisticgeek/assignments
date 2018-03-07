function insert() {
    event.preventDefault();
    var x = this.children[0].value;
    var y = this.children[1].value;
    var e = this.children[2].value;
    document.getElementById("total").innerHTML = operation(e, x, y);
}

function operation(e, x, y) {
    var equ;
    switch (e) {
        case "ADD":
            equ = add(x, y);
            break;
        case "SUBTRACT":
            equ = subtract(x, y);
            break;
        case "MULTIPLY":
            equ = multiply(x, y)
    }
    return equ;
}

function add(x, y) {
    var xvar = x;
    x = parseInt(x, 10);
    var yvar = y;
    y = parseInt(y, 10);
    var sum = x + y;
    return xvar + " + " + yvar + " = " + sum;
}

function subtract(x, y) {
    var xvar = x;
    x = parseInt(x, 10);
    var yvar = y;
    y = parseInt(y, 10);
    var sum = x - y;
    return xvar + " + " + yvar + " = " + sum;
}

function multiply(x, y) {
    var xvar = x;
    x = parseInt(x, 10);
    var yvar = y;
    y = parseInt(y, 10);
    var sum = x * y;
    return xvar + " + " + yvar + " = " + sum;
}

document.getElementById("addForm").addEventListener("submit", insert);
document.getElementById("subForm").addEventListener("submit", insert);
document.getElementById("multForm").addEventListener("submit", insert);