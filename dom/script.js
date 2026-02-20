// example 1

// if we use arrow function instead of normal function it will give you refrence with respect to whole window instead of that particular element where as function gives u current element 
document.getElementById("changeTextButton").addEventListener("click", function(){
    let para = document.getElementById("myParagraph");
    para.innerText = "this text has been changed with js dom property."

})

// example 2

document.getElementById("highlightFirstCity").addEventListener("click", function(){
    let classList = document.getElementById("citiesList")
    classList.firstElementChild.classList.add("highlight");

})

// example 3

document.getElementById("changeOrder").addEventListener("click", function(){
    let order = document.getElementById("coffeeType");
    order.innerHTML = "Espresso"
})

// example 4

document.getElementById("addNewItem").addEventListener("click", function(){
    let newItem = document.createElement("li");
    newItem.textContent = "eggs";
    document.getElementById("shoppingList").appendChild(newItem);
})

// example 5

document.getElementById("removeLastTask").addEventListener("click", function(){
    document.getElementById("taskList").lastElementChild.remove();
});

// example 6
document.getElementById("clickMeButton").addEventListener("dblclick",function(){
    alert("double clicked!");
});

// example 7

// document.getElementById(".teaList").addEventListener("click", function(event){
//     if(event.target && event.target.matches(".teaList")){
//         alert("you did selected" + event.target.textContent);
//     }
// });

// example 8

document.getElementById("feedbackForm").addEventListener("submit", function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `feedback is: ${feedback}`;
});

// example 9

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("domStatus").textContent = `dom full loaded`;
});

// example 10

document.getElementById("toggleHighlight").addEventListener("click", function(){
    document.getElementById("descriptionText").classList.toggle("highlight")
})