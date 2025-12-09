 const animatedElements = document.querySelectorAll(".fade-in, .slide-up");

function checkAnimation() {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.style.animationPlayState = "running";
        }
    });
}

window.addEventListener("scroll", checkAnimation);
checkAnimation();
