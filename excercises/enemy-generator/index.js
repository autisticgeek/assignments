var pickOne = function (arr) {
    var randIndex = Math.floor(Math.random * arr.length);
    return randIndex;
}
var genHitPoints = function (){
    var hitpoints;
    switch(this.type){
        case "Ancient Dragon": 
        hitpoints = Math.floor(Math.random()* (100 - 80 + 1))+ 80;
    }
}

var GenEnemy = function (type, hitPoints) {
    this.type = type;
    this.hitPoints = hitPoints;
}
var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
var getEnemyType = pickOne(enemyTypes);


GenEnemy.prototype.defence = funtion() {
    return this.hitPoints * 3;
}

for(var i=1;i<=100;i++) {
    var getEnemyType = pickOne(enemyTypes);
     

}