document.querySelectorAll(".region-filters button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".region-filters button").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        let region = button.getAttribute("data-region");
        document.querySelectorAll(".location").forEach(location => {
            if (region === "all" || location.classList.contains(region)) {
                location.classList.add("active");
                location.style.animation = "none"; 
                setTimeout(() => location.style.animation = "pulse 0.3s ease-out", 10); 
            } else {
                location.classList.remove("active");
            }
        });
    });
});
