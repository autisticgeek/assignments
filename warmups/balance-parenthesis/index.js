const chkBal = (str) => {
    let tranquility = 0
    str.split('').map(element => {
        if (tranquility < 1)
            element === "(" ? tranquility-- : tranquility++
        else
            return false
    })
    return tranquility === 0;
}



console.log(`"()()" // ->`, chkBal("()()"))
console.log(`"(())" // ->`, chkBal("(())"))
console.log(`"()))" // ->`, chkBal("()))"))
console.log(`")()(" // ->`, chkBal(")()("))
console.log(`"())(" // ->`, chkBal("())("))
