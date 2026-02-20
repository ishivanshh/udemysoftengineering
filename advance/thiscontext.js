const Person1 = {
    name : "shivai",
    greet(){
        console.log(`hi, i am ${this.name}`);
    },
};

Person1.greet(); 
// but as you tranfer to other variable, it will lost in memory,

const greetFunctiom = Person1.greet;
greetFunctiom();

// but as we bind the context it will get from memory

const boundGreet = Person1.greet.bind({ name : "rose"});
boundGreet();


// bind, call and apply