

const valIP = (ip) => ip.split(".").map(octet => octet >= 0 && octet <= 255 ? true : false).every(element => element === true)
console.log(valIP("192.168.3.0"))

//does not account for an address width >< 4 octets