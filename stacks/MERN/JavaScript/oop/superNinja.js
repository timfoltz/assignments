class Ninja {
    constructor(name, health, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log("Name: "+this.name, ", Strength: "+this.strength,", Speed: "+this.speed,", Health: "+this.health)
    }
    drinkSake(){
        this.health +=10;
    }
}

const ninja1 = new Ninja("Hyabusa", 60);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


class Sensei extends Ninja{
    constructor(name, wisdom=10){
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
    aWiseMessage(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")

    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();