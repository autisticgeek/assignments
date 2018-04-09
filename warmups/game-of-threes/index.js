const gameof3 = (n, counter = 0) => {
    if (n === 1) { // we've reasched the end
        return counter;
    } else if (n % 3 === 0) {
        return gameof3(n / 3, counter + 1);
    } else if ((n+1) % 3 === 0) {
        return gameof3((n+1) / 3, counter + 1);
    } else {
        return gameof3((n-1) / 3, counter + 1);
    }
}


console.log(gameof3(3))
console.log(gameof3(6))
console.log(gameof3(9))
console.log(gameof3(12))
console.log(gameof3(15))
console.log(gameof3(18))
console.log(gameof3(21))
console.log(gameof3(24))
console.log(gameof3(27))
console.log(gameof3(30))
console.log(gameof3(33))
console.log(gameof3(34587652835093864))