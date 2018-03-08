var fizzBuzz = function () {
    var arr = [];
    for (i = 1; i <= 100; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            arr.push("fizzbuzz");
        } else if (i % 3 === 0) {
            arr.push("fizz")
        } else if (i % 5 === 0) {
            arr.push("buzz")
        } else {
            arr.push(i);
        }
        
    }
    return arr;
}
console.log(fizzBuzz());

window.localStorage.setExpire({"item1":3,"item2":10,"item3":3});