class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack( target ){
        if( target instanceof Unit ) {
            target.res -= this.power;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
    }

class Effect extends Card {
    constructor(name, cost, text, stat, mag){
        super(name, cost);
        this.text = text;
        this.stat = stat
        this.mag = mag;
    }

    play( target ) {
        if( target instanceof Unit ) {
            console.log(this.text);
            if(this.stat == "res"){
                target.res = target.res + this.mag
            }
            else {
                target.power = target.power + this.mag
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}


const redBeltNinja = new Unit("Red Belt Ninja",3,3,4);
console.log(redBeltNinja);
const hardAlgo = new Effect("Hard Algorithm", 2, "Increases target's resilience by 3", "res",3);
console.log(hardAlgo);
hardAlgo.play(redBeltNinja);
console.log("After playing Hard Algo",redBeltNinja);
const blackBeltNinja = new Unit("Black Belt Ninja", 4,5,4);
console.log(blackBeltNinja);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduces target's resilience by 2", "res", -2);
console.log(unhandledPromiseRejection);
unhandledPromiseRejection.play(redBeltNinja);
console.log("After effect card was played",redBeltNinja);
const pairProgramming = new Effect("Pair Programming", 3, "Increases target's power by 2", "power", 2);
console.log(pairProgramming);
pairProgramming.play(redBeltNinja);
console.log("After effect card", redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
console.log(redBeltNinja);
console.log(blackBeltNinja);

// console.log(blackBeltNinja);
// redBeltNinja.attack(blackBeltNinja);
// console.log(blackBeltNinja);