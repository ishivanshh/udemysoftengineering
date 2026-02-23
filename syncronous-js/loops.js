// 1. using while loop add numbers from 1 to 5 

let sum = 0;
let i = 1;

// 5+4+3+2+1

while(i <= 5) {
    sum = sum + i;
    i++;
}

// console.log("Sum using while loop: " + sum);

//2. write a countdown from 10 to 1 using while loop

let countdown = [];
let j = 10;

while (j > 0){
    countdown.push(j);
    j--;
}
console.log(countdown);

//3. ask user to input the tea which he likes untill he inputs stop dont stop and push in array
/*
let teaCollection = [];
let teas;
do {
    teas = prompt("Enter the tea you like (type 'stop' to finish):");
    if( teas !== 'stop'){
        teaCollection.push(teas);
    }
} while (teas !== 'stop');
*/
// check this in browser console prompt is not available in nodejs

//4. do while loop that adds numbers from 1 to 3 and stores the result in a variable

let t = 1
let total = 0;

do{
    total = total + t; // 
    t++;
} while(t <= 3);


// 5. write a for loop to multiple in array [2,4,6 ] to 2 and store in new array

let originalArray = [2,4,6];
let finalMultipliedArray = [];

for(let l = 0; l < originalArray.length; l++){
    takeNumbers = originalArray[l] * 2 ;
    finalMultipliedArray.push(takeNumbers);
}
//console.log(finalMultipliedArray);

// 6. for loop to lists all the cities in the array and store in new array name citylist 

let cities = ['paris', 'london', 'new york', 'delhi'];
let cityList = [];

for(let m =0 ; m < cities.length; m++){
    let takeCities = cities[m];
    cityList.push(takeCities);
}
// console.log(cityList);

// 7. write a for loop that loops through the array ['green tea','masala tea',"oolang tea", "chai", "black tea"] and stops the loop when it finds "chai". store all the teas before "chai" in new array names selectedTeas.

let GivenTeas = ["green tea", "masala tea","oolang tea" ,"chai","black tea"];

let SelectedTeas = [];

for (l = 0; l < GivenTeas.length ; l ++){
    sortingTeas = GivenTeas[l]
    if(GivenTeas[l] === "chai"){
        break;
    } else{
        SelectedTeas.push(GivenTeas[l]);
    }

}
// console.log(SelectedTeas);

// 8. write a for loop that loops through the array and skips "paris" and store the other cities in new array 

let Givencities = ["london", "paris","spn","delhi"];

let newCities = [];

for(let i = 0; i < Givencities.length; i++){
    if(Givencities[i] === "paris"){
        continue;
    }
    newCities.push(Givencities[i]);
}
// console.log(newCities);

// 9. use for-of loop to iterate through array [1,2,3,4,5,6] and stops when number 4 is found and store numbers before 4 in new array called smallestnumbers.

let numbers = [1,2,3,4,5,6];
let smallestnumbers = [];

for (const num of numbers) {
    if(num === 4){
        break;
    }
    smallestnumbers.push(num)
}
// console.log(smallestnumbers);

// 10. for-of loop for skipping one tea and storing rest in new array.

let originalTeas = ["green tea", "masala tea","oolang tea" ,"chai","black tea"];

let sortedTeas = [];

for (const teas of originalTeas) {
    if(teas === "chai"){
        continue;
    }
    sortedTeas.push(teas);
}
//console.log(sortedTeas);

// 11. for-in loop to loop through an objects containing city populations , any city a populations , skip any city and store the rest in an object named 'cityPopulations'.

let worldCities = {
    "sydney" : 500000,
    "tokyo" : 9000000,
    "berlin" : 23487431,
    "paris" : 32424321,
}; 
let cityPopulations = {};

for (const city in worldCities) {
    if(city === "berlin"){
        break;
    }
    cityPopulations[city] = worldCities[city];    
}
// console.log(cityPopulations);

// 12. for-in loop to loop through an objects containing city populations , any city a populations , skip any city with a population below 3 million and store the rest in an object named 'lagreCitites'.

let lagreCitites = {};

for (const city in worldCities) {
    if(worldCities[city] === 500000){
        continue;
    }
    lagreCitites[city] = worldCities[city];
}
// console.log(lagreCitites);


// 13. for-each loop that iterates through the array , stop when "chai " is found and storee all the previous types in an array names "availableTeas"



let teaCollection = ["green tea", "masala tea","oolang tea" ,"chai","black tea"];

let availableTeas = [];

teaCollection.forEach(function(tea){
    if(tea === "chai"){
        return;
    }
    availableTeas.push(tea);
});
// console.log(availableTeas);


// 14. for-each 

let newIndiaCities = ["new delhi","lucknow","ghaziyabad","hyderbad","bengluru"];

let updatesCites =[];

newIndiaCities.forEach(function(city) {
    if (city === "hyderbad"){
        return;
    }
    updatesCites.push(city);
});

// console.log(updatesCites);

// 15. use for-of loop to iterate throigh the array and stop when the length on the current tea name is greater than 10, store the teas iterate over in an array names "shortTreas"

let newteaCollection = ["green tea", "masala tea","oolang tea" ,"chai","black tea"];

let shortTeas = [];

for (const teas of newteaCollection) {
    if(teas.length > 10){
        break;
    }
    shortTeas.push(teas);
}