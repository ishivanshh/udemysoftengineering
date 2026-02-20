let computer = { cpu : 12};
let mac = {
    screen : "hd",
    __proto__ :computer,
}
let tomHaardware = {};

/*
console.log(`tom` , tomHaardware.__proto__);
console.log(`computer `, computer.__proto__);
console.log(`mac `, mac.__proto__);// these lines are called dunder
*/

let gcar = {
    tyre : 12,
};

let tesla = {
    driver : "ai",
};

Object.setPrototypeOf(tesla, gcar);
console.log(`tesla`, Object.getPrototypeOf(tesla));