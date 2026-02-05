# JAVASCRIPT

- console.log(); => to print
- run in terminal => node + filename

## Datatypes

- let (once created u can modify)
- const (u can not change the value)
- boolean - true/ false

## Logical

- && => and (if both condtition satisy then it returns true)
- || => or (atleast one satisfied)
- != => if condition does not meet it results true.


## Primitive

- to know the type of anyone => typeof();

- string => define string in "", '', `{}`.

- boolean
- number
- null 
- undefined
- symbol => let sym1 = symbol() , they are always different if given same value then also. 

## Non Primitive
1. objects => they are non primitive but inside it they use strind, numbers and other which are primitive 

`let obj = {
    fistname : "shivansh",
    age : 12
}`

*if you want to access use
console.log(obj.firstname);*

### Date
`
let today = new Date();
console.log(today.getDate()); 
// many other functions in it.
`

### Array
` let anotherUser = ['shivi', 23,'loggiedin']`  

# functions
- set of code which we can use again and again
- return :- after this no code will run and it is used to return that line.

- these are 2 types , where we can divide the function.

` function greet() {}
const greet = () => {}`

- arrow function and normal function both as (this) command which is used to access window but arrow function does not have ability to make this function use but normal function can use. major difference

- higher order function are those which in paramter we take functions 

## Javascript is truely prototype based language, its just have musk over object, class based behind the scene prototype is working.
