function reveal() {
    const elements = document.querySelectorAll(".reveal");
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();
