const wind = 5;
const temp = 30;


if(wind>3 && temp <= 50){
    const chill = Math.round(35.74 + (0.6215*temp) - (35.75*Math.pow(wind, .16)) + (.4275*temp*Math.pow(wind, .16)));
   const chillspot = document.querySelector("#wind-chill").innerHTML = `${chill} degrees`;
}

document.querySelector("#temperature").innerHTML = `${temp} degrees`;
document.querySelector("#wind").innerHTML = `${wind} mph`;
