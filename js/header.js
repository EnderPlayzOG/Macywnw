document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const clientArea = dropdown.querySelector(".client-area");
    clientArea.addEventListener("click", function (e) {
        e.preventDefault();
        dropdown.classList.toggle("active");
    });
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });
    window.addEventListener("scroll", function() {
        let header = document.querySelector("header");
        if (window.scrollY > 50) { 
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active"); 
    });
});
