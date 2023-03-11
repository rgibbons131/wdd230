var gridSelector = document.querySelector('#grid-selector');
var listSelector = document.querySelector('#list-selector');
var directoryData = document.querySelector('#directory-info');

gridSelector.addEventListener('click', ()=>{
    if (!gridSelector.classList.contains('current')){    
        gridSelector.classList.add('current');
        listSelector.classList.remove('current');
        directoryData.classList.add('cards')
        directoryData.classList.remove('list')
    }
});

listSelector.addEventListener('click', ()=>{
    if (!listSelector.classList.contains('current')){
        listSelector.classList.add('current');
        gridSelector.classList.remove('current');
        directoryData.classList.add('list')
        directoryData.classList.remove('cards')
    }
});


const url = './data/buisnesses.json';

function displayCards(buisnesses){
    const cards = document.querySelector("#directory-info")
    buisnesses.forEach(buisness => {
        let card = document.createElement("section");
        card.innerHTML = `<div class="buisnes">
        <h2>${buisness.name}</h2>
        <img src=${buisness.imageURL} alt=${buisness.imageAlt}>
        <p>${buisness.phoneNumber}</p>
        <p>${buisness.streetAddress}</p>
        <p>${buisness.cityStateZip}</p>
    </div>`
        if (buisness.membershipLevel=='gold'){
            card.classList.add('gold-member');
        }
        cards.appendChild(card);
  });};

async function getBuisnessData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCards(data.businesses);
};
getBuisnessData();

