const reviews = [
    {
        name: "Michael Thompson",
        img: "Assets/Placeholders/profile-placeholder.jpg",
        title: "Flawless Hosting Experience!",
        content: "I’ve tried a few hosting services before, but this one blows them all out of the water. My server runs smoothly 24/7, no weird lag spikes, and the support team actually listens to you. They helped me set everything up within minutes. 100% recommended!",
        stars: 5
    },
    {
        name: "Sarah Jenkins",
        img: "Assets/Placeholders/profile-placeholder.jpg",
        title: "Surprisingly Good Performance",
        content: "I wasn’t expecting much at first, but wow—this hosting service is crazy fast and stable. Even with multiple players online, my server runs perfectly. No downtime, no disconnects. I honestly don’t know how they keep the prices this low for such quality.",
        stars: 5
    },
    {
        name: "Jake Peterson",
        img: "Assets/Placeholders/profile-placeholder.jpg",
        title: "Top-Notch Customer Support",
        content: "Most hosting companies have terrible support, but these guys? Next level. I had an issue with my setup, and they fixed it in under 5 minutes. You can tell they actually care about their customers. That alone makes it worth it for me!",
        stars: 5
    },
    {
        name: "Emily Ross",
        img: "Assets/Placeholders/profile-placeholder.jpg",
        title: "Smooth, No Lag, No Hassle!",
        content: "Been running a gaming community for a while, and this is by far the most reliable hosting I’ve used. The control panel is easy to use, uptime is solid, and I’ve had zero complaints from my players. If you’re looking for stress-free hosting, this is the one.",
        stars: 5
    }
    
];
let currentIndex = 0;
function generateStars(count) {
    let starsHTML = "";
    for (let i = 0; i < count; i++) {
        starsHTML += `<i class="bi bi-star-fill"></i>`;
    }
    return `<span class="stars">${starsHTML}</span>`;
}
function renderReviews() {
    const reviewContainer = document.querySelector('.trustpilot-reviews');

    if (!reviewContainer) return; 
    reviewContainer.style.opacity = "0"; 
    setTimeout(() => {
        reviewContainer.innerHTML = "";
        for (let i = 0; i < 2; i++) { 
            let reviewIndex = (currentIndex + i) % reviews.length;
            let review = reviews[reviewIndex];
            let reviewBox = document.createElement("div");
            reviewBox.classList.add("review-box");
            reviewBox.innerHTML = `
             <p class="review-author">
                    <img src="${review.img}" alt="${review.name}" class="review-pfp"> ${review.name}
                </p>    
            <h3 class="review-heading">${review.title} ${generateStars(review.stars)}</h3>
                <p class="review-content">${review.content}</p>
               
            `;
            reviewContainer.appendChild(reviewBox);
        }
        reviewContainer.style.opacity = "1";

    }, 500);
}
function cycleReviews() {
    currentIndex = (currentIndex + 2) % reviews.length;
    renderReviews();
}
document.addEventListener("DOMContentLoaded", () => {
    renderReviews();
    setInterval(cycleReviews, 5000);
});
