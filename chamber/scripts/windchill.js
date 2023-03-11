const wind = 5;
const temp = 30;
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const currentWind = document.querySelector('#wind');

const APIkey = "cf6b100e919d63a226a2fe4d759f144a"
const lat = "36.7333"
const lon = "-108.2132"

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`;

function displayResults(weatherData) {
    const temp = weatherData.main.temp.toFixed(0);
    const wind = weatherData.wind.speed.toFixed(0);
    if(wind>3 && temp <= 50){
        const chill = Math.round(35.74 + (0.6215*temp) - (35.75*Math.pow(wind, .16)) + (.4275*temp*Math.pow(wind, .16)));
       const chillspot = document.querySelector("#wind-chill").innerHTML = `Wind chill: ${chill} degrees`;
    }
    currentTemp.innerHTML = `Temp: ${temp} degrees`;
    currentWind.innerHTML = `Wind Speed: ${wind} mph`;
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    const desc = weatherData.weather[0].main;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc; 
  }

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();

