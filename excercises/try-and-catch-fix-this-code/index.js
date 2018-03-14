// function sum(x, y) {
//     if (typeof x !== "numner" || typeof y !== "number") {
//         throw "Input must be a number";
//     }
//     return x + y;
// }

// try {
//     sum("2", "5");
// } catch (err) {
//     console.log(err);
// }

var user = {
    username: "sam",
    password: "123abc"
};

function login(username, password) {
    //check credentials
    if (user.username !== username || user.password !== password) {
        throw {
            type: "Login Failed",
            message: "Wat!",
            username: username,
            password: password
        }
    }
    return "Login Successful";
}
try {
    console.log(login("san", "123abc"));
} catch (err) {
    console.log(err);
}