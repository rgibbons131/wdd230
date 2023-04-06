const url = new URL(window.location.href);
// get the firstname, lastname, email, phone, fruit1, fruit2, fruit3, and instructions from the URL
const firstname = url.searchParams.get("firstname");
const lastname = url.searchParams.get("lastname");
const email = url.searchParams.get("email");
const phone = url.searchParams.get("phone");
const fruit1 = url.searchParams.get("fruit1");
const fruit2 = url.searchParams.get("fruit2");
const fruit3 = url.searchParams.get("fruit3");
const instructions = url.searchParams.get("instructions");
const name = firstname + " " + lastname;

// get the elements with the id of "name", "email", "phone", "fruit1", "fruit2", "fruit3", and "instructions" and set their innerHTML to the values from the URL
document.getElementById("name").innerHTML = name;
document.getElementById("firstname").innerHTML = firstname;
document.getElementById("email").innerHTML = email;
document.getElementById("phone").innerHTML = phone;
if (instructions != ""){
document.getElementById("instructions").innerHTML = instructions;
}
document.getElementById("fruit1").innerHTML = fruit1;
document.getElementById("fruit2").innerHTML = fruit2;
document.getElementById("fruit3").innerHTML = fruit3;

// load in the list from the JSON file with path "../JSON/fruit.json" usint async/await
async function loadList(fruits1, fruits2, fruits3) {
    const response = await fetch("../JSON/fruit.json");
    const fruitList = await response.json();
    let fruit1 = {};
    let fruit2 = {};
    let fruit3 = {};
    fruitList.forEach(fruit => {
        if (fruit.name == fruits1){
            fruit1 = fruit;
        };
        if (fruit.name == fruits2){
            fruit2 = fruit;
        };
        if (fruit.name == fruits3){
            fruit3 = fruit;
        };
    });
    let carbs = fruit1.nutritions.carbohydrates + fruit2.nutritions.carbohydrates + fruit3.nutritions.carbohydrates;
    let protein = fruit1.nutritions.protein + fruit2.nutritions.protein + fruit3.nutritions.protein;
    let fat = fruit1.nutritions.fat + fruit2.nutritions.fat + fruit3.nutritions.fat;
    let calories = fruit1.nutritions.calories + fruit2.nutritions.calories + fruit3.nutritions.calories;
    let sugar = fruit1.nutritions.sugar + fruit2.nutritions.sugar + fruit3.nutritions.sugar;
    
    // put the values from the variable into the HTML elements with matching ids
    document.getElementById("carbs").innerHTML = carbs.toFixed(2);
    document.getElementById("protein").innerHTML = protein.toFixed(2);
    document.getElementById("fat").innerHTML = fat.toFixed(2);
    document.getElementById("calories").innerHTML = calories.toFixed(2);
    document.getElementById("sugar").innerHTML = sugar.toFixed(2);


}

loadList(fruit1, fruit2, fruit3);

// Fill local storage to keep track of the number of orders
    let orders = localStorage.getItem("orders");

    if (orders==null){        
        localStorage.setItem("orders", "1");
    }
    else{
    localStorage.setItem("orders", `${parseInt(orders)+1}`);
    };
    