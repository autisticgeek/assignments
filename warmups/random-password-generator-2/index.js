var password = function (howLong) {
    var pass = "";
    for (var i = 0; i < howLong; i++) {
        var characters = "0123456789~-_=+:;'\"<>,.?/!@#$%^&*()qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
        // var characters = "0123456789";
        pass += characters.charAt(Math.floor(Math.random() * characters.length))
        // console.log(pass);
    }

    return pass;

}

for (var i = 5; i > 0; i--) {
    console.log(password(32));
}