function checkTypes(arr) {
    // Hard way
    // let test = arr[0][0];
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr[i].length; j++) {
    //         if (typeof test !== typeof arr[i][j]) {
    //             return false
    //         }
    //     }
    // }
    // return true;

    // Better way
    return arr.every(subArr => subArr.every(item=> typeof item === typeof arr[0][0]))
}

const multiD1 = [[1, 2, 3], ["a", "4", "c"], [true, true, true]]
console.log(checkTypes(multiD1))
// returns false (inner arrays aren't consistent with each other's data types)

const multiD2 = [[true, false, true], [false, false, true]]
console.log(checkTypes(multiD2))
// returns true (each inner array contains the same data type as the others)