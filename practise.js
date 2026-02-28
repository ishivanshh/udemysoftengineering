function orderTea(teaname){
    function SelectTeaType(extraSnacks= "maggie"){
        return `you have selectd the tea ${teaname} and also buy some extra ${extraSnacks}`;
    }
    return SelectTeaType();
};
let orderCustomizedTea = orderTea("masala-tea");
// console.log(orderCustomizedTea);


// arrow functions

let totalCost =  (cost , extratax) =>{
    return `the cost of pencil is ${cost} and  totalpayble amount ${extratax}`;
}

let orderHistory = totalCost(12,30);
// console.log(orderHistory);


// higher order function => returning and accepting of function., function is passed as argument
// infact anything which takes function as parameter is called higher order function.
function processTeaOrderr(teaFunction){
    return teaFunction("black coffee");
}

function makeTeaa(typeofTea){
    return `maketea : ${typeofTea}`;
}

let order = processTeaOrderr(makeTeaa); 
// console.log(order);

// step => line 32. processteaorderr fucntion called goes,
//  to line 24 with takes parameter as teafuction and line 32 passed with maketea
// so in return instead of teafunction maketea is called with the parameter of black coffee..
// soo makeTea is making the final call.


function createTeaMaker(name){ // name = shivansh 
    return function teaMaker (teatype){ 
        return `making ${teatype} and ${name}`;
    };
}

let teaMaker = createTeaMaker("shivansh");
let result = teaMaker("greeen tea");
// console.log(result);



// construtor

// these are class , this keyword is important.


function Person(name , age){
    this.name = name
    this.age = age
}

function Car(make, model){
    this.make = make
    this.model = model
}

// now creating a class with function inside,

function Detials(size,brand){
    this.size = size
    this.brand = function(){
        return `my clothes are of brand ${brand} and ${this.size}`;
    }
}
// now creating objects or class instance. NEW keyword is important

let myNewBought = new Car("BMW", "M5");
// console.log(myNewBought);

let myCostumer = new Detials("32", "PUMA");
// console.log(myCostumer.brand());

// not working with prototypes with constructors


function SellerFruits(typeOfFruit){
    this.typeOfFruit = typeOfFruit
}
SellerFruits.prototype.sound = function (){
    return `${this.typeOfFruit} are healthy for body...`;
};

let vegetabel = new SellerFruits("banana");
// console.log(vegetabel.sound());

// error handling with it ...

function Drink(name){
    if(!new.target){
        // throw new Error("Drink wine and stay hydrated !");
    }
    this.name = name;
}

let healthyDrink =  Drink("Balentine");
// console.log(healthyDrink());


// encapsulation : no direct access of data object outside class..

class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }
    getBalance() {
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount();
// console.log(account.getBalance());


class Employee {
    constructor(name,salary){
        this.name = name;
        this._salary = salary;
    }
}

let emp = new Employee("shivi","69k");
console.log(emp._salary);