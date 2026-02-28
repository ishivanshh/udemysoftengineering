 function Person(name,age){
    this.name = name;
    this.age = age;
}

function Car(make,model){
    this.make = make;
    this.model = model;
}

let myPersonDetails = new Person("shivansh",12);
//console.log(myPersonDetails);

let myPersonDetails2 = new Person("rose mishra",13);
//console.log(myPersonDetails2);

// this and new are import for making constructor 

function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type}`;
    };
}
let lemonTea = new Tea("masala tea");
//console.log(lemonTea.describe());

function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound while eating`
};

let dog = new Animal("sheru");
//console.log(dog.sound());


let cat = new Animal("cat");
//console.log(cat.sound());

// to check and throw error 

function Drink(name){
    if (!new.target){
        //throw new Error("error new keyword is missing in it?: try again ")
    }
    this.name = name;
}

let tea = new Drink ("tea");
//console.log(tea);
let coffee = Drink ("coffee");
//console.log(coffee);

function Animal(type){
    this.type = type;
}
Animal.prototype.speak = function(){
    return `${this.type} makes a sound`;

};
Array.prototype.shivi = function(){
    return ` custom method ${this}`;
}
let myarray = [1,2,34,42];
//console.log(myarray.shivi());


// as function inside class they are termed as methods.
class Vehicle {
    constructor(make,model){
        this.make = make
        this.model = model
    }
        start(){
            return `${this.model} is a car from ${this.make}`;
        }
    
}

class Car2 extends Vehicle{
    drive(){
        return `${this.make} : this is inheritance example`;
    }
}

let myCar = new Car2("Maruti", "swift");
//console.log(myCar.start());
//console.log(myCar.drive());


// encapsulation .......

class bankAccount{
    #balance = 0; // this cannot be access outisde this class
    // using method to make it accessible outside this class
    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }
}
let account = new bankAccount();
// console.log(account.getBalance());

/// abstraction ....

class coffeeMachine{
    start(){
        return `starting the machine`;
    }

    brewCoffee() {
        return `brewing coffee`;
    }
    pressStartButton(){
        let starting = this.start();
        let brewing = this.brewCoffee();
        return `${starting} and ${brewing}`;
    }
}

let myMachine = new coffeeMachine();
//console.log(myMachine.start());
//console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());



//** polymorphism **//
// same function they have but result are different that why called ability to return different properties
class Bird{
    fly(){
    return `bird can fly`;
    }
}
class Penguin extends Bird{
    fly(){
        return `they can't fly`;
    }
} 

let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly());
console.log(penguin.fly());


// static method 

class calculator{
    static add(a,b){
        return a+b;
    }
}
let miniCal = new calculator()
//console.log(miniCal.add(2,3));
// cant able access.

// console.log(calculator.add(2,3));

// getters and setters

class Employee {
    #salary:
    
    constructor (name,salary){
        if(salary<0){
            throw new Error("salary can not be in negative")
        }
        this.name = name;
        this.#salary = this._salary;
    }

    get salary (){
        return `you are not going to get salary`;
    }

    set salary(value){
        if(value < 0){
            console.error("invalid error");
        } else {
            this._salary = value;
        }
    }
}
let emp = new Employee("Shivi", -6999);
console.log(emp._salary);
emp.salary = 433223; 