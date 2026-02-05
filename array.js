//1.  accessing array elements by index and storing to a variable
let teaFlovors = ['green tea' , 'balck tea','oolang tea'];

let firstTea = teaFlovors[0];
// console.log(firstTea) // green tea

// 2. accessing third element of an array and storing to a variable
let cities = ['london' , 'paris', 'tokyo', 'new york' ];

let favoriteCity = cities[2];

//3. changing elements in an array by index
let teaTypes = ['herbal tea', 'chai tea', 'matcha tea', 'white tea'];

teaTypes[1] = 'jasmine tea'
// console.log(teaTypes)

// 4. adding elements to an array by index

// method 1 not recommended
let citiesVisited = ['rome', 'barcelona', 'amsterdam'];

citiesVisited[citiesVisited.length] = 'berlin';
// console.log(citiesVisited)

// method 2 recommended push method
citiesVisited.push('lisbon');

// 5. creating a soft copy of an array, any changes made to the original array will reflect in the copied array

let popularFruits = ['mango', 'banana', 'apple', 'grapes'];

let fruitsCopy = popularFruits;
// popularFruits.pop()
// console.log(fruitsCopy);
// console.log(popularFruits);

//6. creating a hard copy of an array so that changes made to the copied array do not affect the original array

let fruitsHardCopy = [...popularFruits]; // rest and spread operator 
popularFruits.push('orange');
// console.log(fruitsHardCopy);
// console.log(popularFruits);

// 7. merge two arrays into new array

let fruits = ['kiwi', 'peach', 'pear'];
let vegetables = ['carrot', 'broccoli', 'spinach'];

let footItems = fruits.concat(vegetables);

