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


// POP UP Form
function openPopup() {
    document.getElementById('formpop').style.display = 'flex';
}

function closePopup() {
    document.getElementById('formpop').style.display = 'none';
}

// Optional: Close when clicking outside the popup
window.onclick = function(event) {
    const popup = document.getElementById('formpop');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}


// AOS
function setAOSDurations(duration) {
    const elements = document.querySelectorAll('.animated-box');
    elements.forEach(el => {
        el.setAttribute('data-aos-duration', duration);
    });

    // Reinitialize AOS to apply the new durations
    AOS.init({
        duration: duration // optional: global default
    });
}

// Call the function with desired duration (in milliseconds)
setAOSDurations(1500); // sets duration to 1.5 seconds



// Handling Contact the form to send data 

const scriptURL = 'https://script.google.com/macros/s/AKfycbxcU_Zf3KCG-fmWuDXGB4uNvoPoFUluJY4m5ffcXkgW2m7DmYwQbkrMCVfUdfOjgmMJ/exec';
const message1 = document.getElementById('message')

document.getElementById("myForm").addEventListener("submit", function(e) {
    const btn = document.getElementById('contactSubmit');
    btn.classList.add('blur-bt')
    e.preventDefault();

    const form = e.target;
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,

    };

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);


    fetch(scriptURL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        })
        .then(response => {
            message1.textContent = "Form submitted successfully!";
            btn.classList.remove('blur-bt')
            window.location.href = 'Thankyou.html'
            form.reset(); // clears all fields
        })
        .catch(error => {
            message1.textContent = "Error submitting the form. Try again.";
            message1.style.color = "red";
        });
});


// Pop UP Form Handling

const message2 = document.getElementById('msgpop');
document.getElementById("formpop").addEventListener("submit", function(e) {
    const btn = document.getElementById('submitpop');
    btn.classList.add('blur-bt')
    e.preventDefault();

    const form = e.target;
    const data = {
        name: document.getElementById('namepop').value,
        email: document.getElementById('emailpop').value,
        phone: document.getElementById('phonepop').value,

    };

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);


    fetch(scriptURL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        })
        .then(response => {
            message2.textContent = "Form submitted successfully!";
            btn.classList.remove('blur-bt')
            window.location.href = 'Thankyou.html'
            form.reset(); // clears all fields
        })
        .catch(error => {
            message2.textContent = "Error submitting the form. Try again.";
            message2.style.color = "red";
        });
});