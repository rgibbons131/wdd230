const url = './prophets.json';

function displayProphets(prophets){
    const cards = document.querySelector(".cards")
    prophets.forEach(prophet => {
        let card = document.createElement("section");
        card.innerHTML = `<h2>${prophet.name} ${prophet.lastname}</h2>
        <h3>${prophet.birthdate}</h3>
        <h3>${prophet.birthplace}</h3>
        <img src=${prophet.imageurl} loading="lazy" alt="prophet picture">`
        cards.appendChild(card);
  });};

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
};
getProphetData();

