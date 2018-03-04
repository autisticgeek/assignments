// Implement all of the listed String Methods below using at least 3 unique Functions.
// .concat() !
// .indexOf() !
// .lastIndexOf() !
// .match() !
// .replace() !
// .slice() !
// .split() !
// .toLowerCase() !
// .toUpperCase() !
// .substr() !

var theTimeMachine = "The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us. His grey eyes shone and twinkled, and his usually pale face was flushed and animated. The fire burned brightly, and the soft radiance of the incandescent lights in the lilies of silver caught the bubbles that flashed and passed in our glasses. Our chairs, being his patents, embraced and caressed us rather than submitted to be sat upon, and there was that luxurious after-dinner atmosphere when thought roams gracefully free of the trammels of precision. And he put it to us in this way—marking the points with a lean forefinger—as we sat and lazily admired his earnestness over this new paradox (as we thought it) and his fecundity.";

var vowelsRemoved = function (str) {
    var regex = /[A,E,I,O,U]/gi;
    return str.match(regex);
}
var one = function (str) {
    str = vowelsRemoved(str.substr(str.indexOf("we"), str.lastIndexOf("we")));
    console.log(str);
}
var two = function (str) {
    str = str.toUpperCase(str.split("."))
    console.log(str);
}
var three = function (str) {
    str = str.toLowerCase().replace(/ /g, "-")
    console.log(str);
}
var four= function(str){
    str= str.slice(0,19).concat(str.slice(382,406));
    console.log(str);
}

one(theTimeMachine);
two(theTimeMachine);
three(theTimeMachine);
four(theTimeMachine);


