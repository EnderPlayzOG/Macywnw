function toggleFeatures() {
    const hiddenFeatures = document.querySelector('.hidden-features');
    const button = document.querySelector('.show-more-btn');
    const buttonContainer = document.querySelector('.show-more-container');

    if (!hiddenFeatures.classList.contains("show")) {
        hiddenFeatures.style.display = "grid";
        setTimeout(() => {
            hiddenFeatures.classList.add("show");
        }, 10);
        button.innerHTML = 'Show Less Features <i class="fas fa-chevron-up"></i>';
    } else {
        hiddenFeatures.classList.remove("show");
        buttonContainer.classList.add("shoot-up");
        setTimeout(() => {
            hiddenFeatures.style.display = "none";
            buttonContainer.classList.remove("shoot-up"); 
        }, 250);
        button.innerHTML = 'Show All Features <i class="fas fa-chevron-down"></i>';
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".hidden-features").style.display = "none";
});
