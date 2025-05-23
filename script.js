// Home page Slider
const bgImages = [
    './images/bg1.jpg', // Replace with your image path
    './images/bg2.jpg', // Replace with your image path
    './images/bg3.jpg', // Replace with your image path
    './images/bg4.jpg', // Replace with your image path
];

let current = 0;
const slider = document.querySelector('.background-slider');

function changeBackground(images) {
    slider.style.backgroundImage = `url(${images[current]})`;
    current = (current + 1) % images.length;
}

changeBackground(bgImages, slider); // Set first image
setInterval(() => changeBackground(bgImages), 4000); // Change every 5 seconds


// OverView

const ocTrack = document.querySelector('.oc-carousel-track');
const ocImages = document.querySelectorAll('.oc-carousel-track img');
let ocIndex = 0;
const ocTotal = ocImages.length;

function ocSlideCarousel() {
    ocIndex = (ocIndex + 1) % ocTotal;
    let width = ocTrack.clientWidth;
    ocTrack.style.transform = `translateX(-${ocIndex * width}px)`;
}

setInterval(ocSlideCarousel, 2500); // Slide every 3 seconds