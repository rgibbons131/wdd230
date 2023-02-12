// Gets todays date for the year
const today = new Date();

// Gets the year span and sets it to be the current year
document.querySelector('#currentyear').textContent = today.getFullYear();

// This sets the last modified area to the correct last modified
document.querySelector("#lastupdated").textContent = document.lastModified;

