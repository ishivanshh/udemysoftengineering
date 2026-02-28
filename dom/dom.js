// example  1

const ChangeBtn = document.getElementById("changeTextButton");

ChangeBtn.addEventListener("click", function(){
    document.getElementById("myParagraph").innerHTML = `Paragraph content changed..`
});


// example 2

let city = document.getElementById("citiesList");

const HighlightBtn = document.getElementById("highlightFirstCity");
HighlightBtn.addEventListener("click", function(){
    city.firstElementChild.classList.add("highlight")
});

HighlightBtn.addEventListener("dblclick", function (){
    city.firstElementChild.classList.remove("highlight");
});

// example 3



const ChangeOrder = document.getElementById("changeOrder");
ChangeOrder.addEventListener("click", function (){
    let coffee = document.getElementById("coffeeType");
    coffee.innerHTML = `Espresso`;
    coffee.style.backgroundColor = "brown";
    coffee.style.color = "white";
});

// example 4

const AddItembtn = document.getElementById("addNewItem");
AddItembtn.addEventListener("click", function(){
    let newItem = document.createElement("li");
    newItem.textContent = `momos`;
    let ExistItem = document.getElementById("shoppingList");
    ExistItem.appendChild(newItem);
})

// example 5

const RemoveBtn = document.getElementById("removeLastTask");
RemoveBtn.addEventListener("click", function(){
     const taskList1 = document.getElementById("taskList")
     taskList1.lastElementChild.remove();
});

// example 7

document.getElementById("teaList").addEventListener("click", function(e){
    if(e.target && e.target.matches(".teaItem")){
        alert("You have selected:" +e.target.textContent);
    }[]
});

// example 8

document.getElementById("feedbackForm").addEventListener("submit", function(e){
    e.preventDefault();
    let feedText = document.getElementById("feedbackInput").value;
    console.log(feedText);
    document.getElementById("feedbackDisplay").textContent = `feedBack is : ${feedText}`
});


// example 9

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("domStatus").textContent = "DOM FULLY LOADED"
});

// example 10

document.getElementById("toggleHighlight").addEventListener("click", function(){
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
})