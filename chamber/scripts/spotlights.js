const spotlighturl = './data/buisnesses.json';

function displaySpotlight(buisnesses){
    const spotlightSection = document.querySelector(".spotlights")
    buisnesses = buisnesses.filter(buisness => buisness.membershipLevel=='gold' || buisness.membershipLevel=='silver');
    var spotlights = [];
    for (let i = 0; i < 3; i++) {
        let location = Math.floor(Math.random() * buisnesses.length);
        spotlights.push(buisnesses.splice(location,1)[0]);
    };
    var spotlightCount = 1;
    spotlights.forEach(spotlight => {
        let div = document.createElement("div");
        div.innerHTML = `<div class="spotlight${spotlightCount}">
        <img src=${spotlight.imageURL} alt=${spotlight.imageAlt}>
        <h2>${spotlight.name}</h2>
        <p>${spotlight.spotlight}</p>
        <hr>
        <p>${spotlight.phoneNumber}</p>
        <p>${spotlight.websiteURL}</p>
        </div>`
        spotlightCount++;
        spotlightSection.appendChild(div);
  });};

async function getBuisnessData() {
    const response = await fetch(spotlighturl);
    const data = await response.json();
    displaySpotlight(data.businesses);
};
getBuisnessData();

