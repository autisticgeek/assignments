

function validate(ip) {return ip.split(".").map(octet => octet >=0 && octet<=255 ? true: false).every(element=> element===true)}

console.log(validate("192.168.3.0"))