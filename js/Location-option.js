function updatePlans(location) {
    const plans = {
        "India": {
            prices: ["₹150", "₹200", "₹300", "₹400", "₹600", "₹800", "₹1600", "₹3200"],
            processors: ["AMD A10 Pro, 60% CPU", "AMD A10 Pro, 80% CPU", "AMD A10 Pro, 120% CPU", "AMD A10 Pro, 160% CPU", "AMD A10 Pro, 240% CPU", "AMD A10 Pro, 320% CPU", "AMD A10 Pro, 640% CPU", "AMD A10 Pro, 1280% CPU"]
        },
        "Germany": {
            prices: ["€1.73", "€2.27", "€3.35", "€4.44", "€6.60", "€8.77", "€17.54", "€34.88"],
            processors: ["AMD Ryzen™ 9 5900X, 60% CPU", "AMD Ryzen™ 9 5900X, 80% CPU", "AMD Ryzen™ 9 5900X, 120% CPU", "AMD Ryzen™ 9 5900X, 160% CPU", "AMD Ryzen™ 9 5900X, 240% CPU", "AMD Ryzen™ 9 5900X, 320% CPU", "AMD Ryzen™ 9 5900X, 640% CPU", "AMD Ryzen™ 9 5900X, 1280% CPU"]
        }
    };

    const priceElements = document.querySelectorAll(".price");
    const cpuElements = document.querySelectorAll(".cpu");

    if (plans[location]) {
        for (let i = 0; i < priceElements.length; i++) {
            if (plans[location].prices[i]) {
                priceElements[i].innerHTML = plans[location].prices[i] + "<span>/month</span>";
            }
            if (plans[location].processors[i]) {
                cpuElements[i].innerHTML = plans[location].processors[i];
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".location-btn");

    if (buttons.length > 0) {
        buttons[0].classList.add("active"); // Set first button as active by default
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove 'active' from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));

            // Add 'active' to the clicked button
            this.classList.add("active");
        });
    });
});
