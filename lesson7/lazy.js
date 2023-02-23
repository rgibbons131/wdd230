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