// Scroll-to-top button functionality
const scrollToTopButton = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Added functionality to display the button when the user scrolls down and smooth scrolling when clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Make the "Explore more" button trigger an alert
const exploreBtn = document.getElementById('exploreBtn');
exploreBtn.addEventListener('click', () => {
    alert('Welcome to a new coffee experience!');
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        const nav = document.querySelector("nav");
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
});