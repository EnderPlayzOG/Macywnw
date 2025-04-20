// FAQ Data (Modify this array to update FAQs)

const faqs = [
    { question: "1. How do I Buy a game server?", answer: "Buying a game server is simple: Select your game,pick a location,choose a plan, Complete the payment process and get your server. Your server will be ready within 5 min." },
    { question: "2. What payment methods do you accept?", answer: "We accept Upi, Paytm, Bkash, Nagad, Easypaisa, Jazzcash, credit/debit cards (Visa, Mastercard, American Express), cryptocurrency (Bitcoin, Ethereum, USDT)." },
    { question: "3. Do you offer support for setting up the server?", answer: "Yes, our support team is available 24/7 to help you set up and manage your server." },
    { question: "4. Where are your server locations?", answer: "We have data centers in North America, Europe, Asia, Oceania, and South America. You can select your preferred location when purchasing your server." },
    { question: "5. Do you offer a refund policy?", answer: "Yes, we offer a refund within 24 hours of purchase if you face any technical issues that we cannot resolve." }
    
];

function renderFAQs() {
    const faqContainer = document.getElementById("faq-list");
    faqContainer.innerHTML = ""; 
    faqs.forEach((faq, index) => {
        const faqItem = document.createElement("div");
        faqItem.classList.add("faq-item");
        faqItem.innerHTML = `
            <span>${faq.question}</span>
            <i class="fas fa-chevron-down"></i>
        `;
        faqItem.onclick = function() { toggleFAQ(index); };
        const faqContent = document.createElement("div");
        faqContent.classList.add("faq-content");
        faqContent.innerHTML = faq.answer;
        faqContainer.appendChild(faqItem);
        faqContainer.appendChild(faqContent);
    });
}

function toggleFAQ(index) {
    const faqItems = document.querySelectorAll(".faq-item");
    const faqContents = document.querySelectorAll(".faq-content");
    const content = faqContents[index];
    if (!content) return; 
    if (faqItems[index].classList.contains("open")) {
        faqItems[index].classList.remove("open");
        content.style.maxHeight = "0";
        content.style.opacity = "0";
        content.style.padding = "0 15px"; 
    } else {
        faqItems.forEach((item, i) => {
            item.classList.remove("open");
            faqContents[i].style.maxHeight = "0";
            faqContents[i].style.opacity = "0";
            faqContents[i].style.padding = "0 15px";
        });
        faqItems[index].classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = "1";
        content.style.padding = "15px"; 
    }
}

document.addEventListener("DOMContentLoaded", renderFAQs);