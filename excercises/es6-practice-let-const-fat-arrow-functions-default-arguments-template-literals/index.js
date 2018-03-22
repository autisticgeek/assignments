const name = 'John'
let age = 101
let pets = ["cat", "dog"]

let petObjects = []

for (let i = 0; i < pets.length; i++) {
    let pet = {
        type: pets[i]
    }
    let name;
    if (pets[i] === "cat") {
        name = "fluffy"
    } else {
        name = "spot"
    }
    pet.name = name
    petObjects.push(pet)
}
console.log(petObjects);


// const vegetables = carrots.map(function(carrot){  
//     return {type: "carrot", name: carrot}
// })
const vegetables = carrots.map(carrot => ({type: "carrot",
    name: carrot})
)
console.log(vegetables);