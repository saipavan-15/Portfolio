const hamburger = document.querySelector(".hamburger");
const menuBar = document.querySelector(".menu-bar");

hamburger.addEventListener("click", () => {
    menuBar.classList.toggle("show");
});

document.addEventListener("click", (e) => {
    if (!menuBar.contains(e.target) && !hamburger.contains(e.target)) {
        menuBar.classList.remove("show");
    }
});

// ============================
// SCROLL ANIMATIONS
// ============================
const animatedElements = document.querySelectorAll('.fade-in, .slide-left, .slide-right');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

animatedElements.forEach(el => observer.observe(el));
