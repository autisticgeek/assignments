var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = 'undecided';

while(option != 'fight bears'){
  option = options[ask.keyInSelect(options, "What would you like to do today?: ")];
  if(option === 'pick flowers'){
    console.log("\nYou pick some flowers. You make a bouquet.\n");
  } else if(option === 'shoot guns') {
    console.log("\nYou shoot guns.\n");
  } else if (option === 'fight bears') {
    console.log("\nYou fought a bear and got beat up\n");
  } else {
    console.log("\nPick something else\n");
  }
}


