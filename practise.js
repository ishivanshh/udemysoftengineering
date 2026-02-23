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
console.log(result);

