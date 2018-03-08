var square = document.getElementById("squ");
var changeStyle = function (event) {
    switch (event.type) {
        case "mouseenter":
            changeColor("blue");
            break;
        case "mousedown":
            changeColor("red");
            break;
        case "mouseup":
            changeColor("yellow");
            break;
        case "dblclick":
            changeColor("green");
            break;
        case "wheel":
            changeColor("orange");
            break;
    }
}
var useKeyboardChangeStyle = function (event) {
    switch (event.which) {
        case 66:
            changeColor("blue");
            break;
        case 82:
            changeColor("red");
            break;
        case 89:
            changeColor("yellow");
            break;
        case 71:
            changeColor("green");
            break;
        case 79:
            changeColor("orange");
            break;
    }
}
var changeColor = function (color) {
    square.style.backgroundColor = color;
}
square.addEventListener("mouseenter", changeStyle);
square.addEventListener("mousedown", changeStyle);
square.addEventListener("mouseup", changeStyle);
square.addEventListener("dblclick", changeStyle);
window.addEventListener("wheel", changeStyle);
window.addEventListener("keyup", useKeyboardChangeStyle);