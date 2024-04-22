"use strict";


const mealBD = () => {
    document.getElementById("foods_button").addEventListener
    ("click", () => {
        const searchBox = document.getElementById("search_box");
        const searchBoxName = searchBox.value;

        searchBox.value = "";

        if ((searchBox.value = " ")) {
            alert("hlw");
        } else {
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBoxName}`;
        fetch(url)
        .then(response => response.json())
        .then(data => getFoods(data.meals));

        spinnerToggole("flex", "none");
        }
        
    }); 
};

// spinner function 
const spinnerToggole = (spinnerDisplay, mainCardDisplay) => {
    document.getElementById("spinner_togg").style.display = spinnerDisplay;
    document.getElementById("main_card").style.display = mainCardDisplay;
} ;

const getFoods = foodItems => {
    const mainCard = document.getElementById("main_card");
    mainCard.textContent = "";
    for (const foods of foodItems) {
        const createDiv = document.createElement("div");
        createDiv.classList.add("col");
    
        createDiv.innerHTML = `
        <div class="col">
            <div class="card">
                <img src="${foods.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
        `
        spinnerToggole("none", "flex")
        mainCard.appendChild(createDiv)
    }
    
    console.log(foodItems);
};

mealBD();




