const shuffle = arr => 
    arr.sort(()=>.5-Math.random())
    .sort(()=>.5-Math.random())
    .sort(()=>.5-Math.random());


const suits= ["♠","♡", "♢", "♣"]
const faces=["Ace",2,3,4,5,6,7,8,9,10,"Jack","King","Queen"]
let cards=["Joker"];
for(i=0; i<suits.length; i++){
    for(j=0;j<faces.length;j++){
        cards.push(`${faces[j]} of ${suits[i]}`)
    }
}
console.log(shuffle(cards))