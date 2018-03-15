var shopper = {
    id:4853543,
    fName:"Ben",
    lName:"Turner",
    fullName: function(){
        return `${this.fName} ${this.lName}`;
    },
    groceryCart : ["milk", "eggs", "replacement hat"]
}

console.log(shopper);