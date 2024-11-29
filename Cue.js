let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");

    // Hide all slides initially
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Increment slide index, loop back to 1 if it exceeds the number of slides
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
}

// Start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", () => {
    showSlides(); // Show the first slide
    setInterval(showSlides, 3000); // Automatically switch slides every 3 seconds

    // Hamburger menu toggle functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sideMenu = document.querySelector('.side-menu');

    hamburgerMenu.addEventListener('click', () => {
        // Toggle the 'show' class to show or hide the side menu
        sideMenu.classList.toggle('show');
    });

    // Handle form submission
    const infoForm = document.getElementById("infoForm");
    if (infoForm) {
        infoForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form from refreshing the page
            alert("You are already part of the cue!"); // Show alert

            // Clear the form fields
            infoForm.reset(); // Reset the form fields
        });
    }

    
});
