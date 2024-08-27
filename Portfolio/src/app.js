// HEADER
const heroArea = document.querySelector('.hero-area');

heroArea.addEventListener('mouseenter', () => {
  heroArea.style.animationDuration = '7s'; // Change the animation duration on hover
});

heroArea.addEventListener('mouseleave', () => {
  heroArea.style.animationDuration = '10s'; // Restore the original animation duration
});

//SUBMIT RESPONSE 
function submitResponse() {
    // Get the user's response from the input field
    var userResponse = document.getElementById("response").value;
    
    // Do something with the user's response (you can send it to the server, display it, etc.)
    // For now, let's just display it in the console
    console.log("User's Response: " + userResponse);

    // Clear the input field after submission (optional)
    document.getElementById("response").value = "";
}

// SLIDESHOW FOR MUSIC 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("song-button");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}