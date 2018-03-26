let maxLoop = 300;

class Party {
    constructor(population = 1000000) {
        this.population = population
    }
}
const penguins = new Party
const commies = new Party
const sendNuke = (party, targetName, target) => {
    console.log(`The ${party} send a nuke!`);
    let stayOnTarget = Math.random() > 0.5 ? true : false;
    let result = stayOnTarget ? hit(target, targetName) : missed(targetName)
    console.log(result);
}
const hit = (isHit, hazName) => {
    let damage = Math.floor(Math.random() * isHit.population);
    isHit.population -= damage;
    return `It Hits!\n${damage} ${hazName} were killed`;
}
const missed = hazName => {
    return `It missed!\n The ${hazName} slowly leave thier shelters`
}


const coin = Math.random() > 0.5 ? `penguins` : `commies`;
while (maxLoop !== 0 && penguins.population !== 1 && commies.population !== 1) {
    let attack, retaliate;
    if (coin === `penguins`) {
        attack = [`penguins`, `commies`, commies];
        retaliate = [`commies`, `penguins`, penguins];
    } else {
        attack = [`commies`, `penguins`, penguins];
        retaliate = [`penguins`, `commies`, commies];
    }
    sendNuke(attack[0], attack[1], attack[2]);
    sendNuke(retaliate[0], retaliate[1], retaliate[2]);
    console.log(`Penguins ${penguins.population}`);
    console.log(`Commie   ${commies.population}`);
    maxLoop--;

}
let warIsHell;
if (penguins.population === 1) {
    warIsHell = `The last penguin surrenders`
} else if (commies.population === 1) {
    warIsHell = `The penguins have rid the world of communisum`;
} else {
    warIsHell = `You blew it up\n Damn you to hell!`
}
console.log(warIsHell);