// Gets all the images
let discoverImages = document.querySelectorAll("img[data-src]");

// create function for changing image attributes
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () =>{
        image.removeAttribute("data-src");
    };
};

// Add an intersection observer 
const callback = (items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  };

// Set up the options
let options = {
    threshold: 0.01,
  };

  // Create the observer
const observer = new IntersectionObserver(callback, options);

// send the images through the funcitons when the observer sees them
discoverImages.forEach((img) => {
    observer.observe(img);
  });

function toggleMenu(){
    document.querySelector("#navbar").classList.toggle('menu-active');
    document.querySelector("#menu-closed").classList.toggle('menu-active');
    document.querySelector("#menu-open").classList.toggle('menu-active');
}

// document.querySelector("#hamburger-menu").onclick = toggleMenu;

document.querySelector("#hamburger-menu").addEventListener('click', toggleMenu);

function displayBanner(){
    let today = new Date();
try{
if (today.getDay() == 1 || today.getDay() == 2){
    document.querySelector("#meet-greet").classList.toggle('hidden');
}}
catch{console.log("wrong Page")};
}
displayBanner();

function fillLastVisit(){
    let today = new Date();
    const MILLIS_PER_DAY = 24 * 60 * 60 * 1000;

    let lastVisitString = localStorage.getItem("lastVisit");
    let visitspan = document.querySelector('#last_visit');

    if (lastVisitString==null){        
    visitspan.textContent = '0'
    }
    else{
    lastVisitDate=new Date(lastVisitString);
    daysSinceLastVisit = Math.floor((today.getTime() - lastVisitDate.getTime()) / MILLIS_PER_DAY);
    visitspan.textContent = daysSinceLastVisit;
    };
    localStorage.setItem("lastVisit", today.toLocaleDateString());
}
fillLastVisit()