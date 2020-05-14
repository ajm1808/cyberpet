class Pet{
    constructor (name){
    this._name = name;
    this._hunger = 100;
    this._thirst = 100;
    }
    get name(){
    return this._name;
    }
    get hunger(){
    return this._hunger;
    }
    get thirst(){
    return this._thirst;
    }
    eat(){
    this._hunger--;
    }
    drink(){
    this._thirst--;
    } 
}
//below is adding a subclass to Animal (Bunny) which then inherits all of the class features. super(name) takes the name of the Bunny into Animal
class Bunny extends Pet {
    constructor(name, lovesCarrot,favFood){
    super(name); //parameter to be passed into animal to creat object
    this._lovesCarrot = lovesCarrot;
    this._favFood=favFood;
    }
    get lovesCarrots(){
    return this._lovesCarrot;
    }
    get favFood(){
    return this._favFood;
    }
}

const rosie = new Bunny("Rosie", true, ["basil", "rockets", "broccoli"]
);

console.log(rosie.favFood);

rosie.drink();
console.log(rosie.thirst);

console.log(rosie);

class Dog extends Pet{
    constructor(name, wagsTail){
        super(name);
        this._wagsTail=wagsTail;
    }
    get wagsTail(){
        return this._wagsTail;
    }
}

const coco=new Dog("Coco",true);

console.log(coco);