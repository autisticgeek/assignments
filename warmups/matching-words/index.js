let str = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."


const matchWords = str => {
    const counts = {}; //store words we have seen
    const output = []; //store words that are duplicates
    str.replace(/[^a-z\s]/gi, "").toLowerCase().split(" ").forEach(str => { //replace that wich is not a letter or a space, convert to all lowercaase, devide it into an array, run a function on each part of the array
        if (counts.hasOwnProperty(str)) { //check to see if we have seen this word before
            if (!output.includes(str)) { //check to see if word is NOT already in the output array
                output.push(str);// adds word to the output array 
            }
        } else {
            counts[str] = " "; //adds word to counts object
        }
    })
    return output; //return the output array
}
console.log(matchWords(str));