let orders = localStorage.getItem("orders");
if (orders==null){        
    document.getElementById("orders").innerHTML = "0";
}
else{
    document.getElementById("orders").innerHTML = orders;
};

const APIkey = "cf6b100e919d63a226a2fe4d759f144a"
const lat = "33.1581"
const lon = "-117.3506"

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`;

function displayResults(weatherData) {
    const today = weatherData.list[0];
    const tomorrow = weatherData.list[8];
    const dayAfter = weatherData.list[16];
    document.getElementById("temp_1").innerHTML = `Temp: ${today.main.temp}°F`;
    document.getElementById("weather_description").innerHTML = `${today.weather[0].description}`;
    document.getElementById("temp_2").innerHTML = `Temp: ${tomorrow.main.temp}°F`;
    document.getElementById("temp_3").innerHTML = `Temp: ${dayAfter.main.temp}°F`;
    document.getElementById("humidity").innerHTML = `Humidity: ${today.main.humidity}%`;

    const iconsrc1 = `https://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`
    const desc1 = today.weather[0].main;
    document.getElementById("icon1").setAttribute('src', iconsrc1);
    icon1.setAttribute('alt', desc1);

    const iconsrc2 = `https://openweathermap.org/img/wn/${tomorrow.weather[0].icon}@2x.png`
    const desc2 = tomorrow.weather[0].main;
    document.getElementById("icon2").setAttribute('src', iconsrc2);
    icon1.setAttribute('alt', desc2);

    const iconsrc3 = `https://openweathermap.org/img/wn/${dayAfter.weather[0].icon}@2x.png`
    const desc3 = dayAfter.weather[0].main;
    document.getElementById("icon3").setAttribute('src', iconsrc3);
    icon1.setAttribute('alt', desc3);



  }

async function apiFetch(url) {
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
  
apiFetch(url);