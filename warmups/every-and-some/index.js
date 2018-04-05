// everyv arr.every(function)
// 

// const every = arr => {
//     for(let i=0;i<arr.length;i++){
//         if(typeof arr[i] !== "number" )
//         return false;
//     }
//     return true;
// }
//console.log(every([1, 2, 3]))

const every = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (!cb(arr[i]))
            return false;
    }
    return true;
}
console.log(every([1, 2, "hi"], num=> typeof num === "number"))



//some arr.some(function(str))
// const some = (arr, str) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === str) {
//             return true
//         }
//     }
//     return false
// }
// console.log(some(["ben", "jacob", "bob"], "steven"))

const some = (arr, str, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i],str)) {
            return true
        }
    }
    return false
}
console.log(some(["ben", "jacob", "bob"], "steven", (test, str) => test === str))