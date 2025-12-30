// 1. Animated Typewriter Effect
const subtitle = document.getElementById('animated-subtitle');
const text = "Full Stack Java Developer specializing in Java, JDBC, and Scalable Systems.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        subtitle.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Speed of typing
    }
}

// 2. Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Start the animation when the page loads
window.onload = typeWriter;