// 1. create function named "maketea" that takes one parameter , "typeoftea" and return a string like "making a good green tea" when called with "green tea".

function maketea(typeoftea){ 
    return `Making of good ${typeoftea}`
}

let storeTea = maketea("lemon tea");
// console.log(storeTea);

// 2. 

function orderTea(teaType){ // loads in memory orderTea , save area execution contest
    function confirmOrder(){  // loads in memory as well
        return `order confirmed for chai`;
    }
    return confirmOrder();
}
// after returning both function execution contest will be deleted from the memory.

let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);


// 3. arrow function create a function with name calculateTotal with 2 parameters 

const calculateTotal = (price , quantity) => {
    return price * quantity
}

let totalCost = calculateTotal(566,10)
// console.log(totalCost);

// 4. CREATA function where parameter takes a function

function maketea(typeoftea){
    return `maketea : ${typeoftea}`
}
function processTeaOrder (teaFunction){
    return teaFunction('earl grey')
}

let order = processTeaOrder(maketea)
console.log(order);

// 5. 

function createTeaMaker(name){
    return function (teaType){
        return `Making ${teaType} ${name}`
    };
}

let teaMaker = createTeaMaker("shibansh");
let result = teaMaker("green tea")
console.log(result);

// unique bevaiour function inside function still it can use its variables , int inside function can use them 