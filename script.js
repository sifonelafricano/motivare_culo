const quotes = [
    "You are capable of more than you know.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    // Aggiungi altre frasi motivazionali qui
];

const quoteImage = document.getElementById("quoteImage");
const quoteButton = document.getElementById("quoteButton");
const quoteText = document.getElementById("quoteText");

quoteButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = randomQuote;
});

quoteText.style.fontFamily = "Comic Sans MS, cursive";
quoteText.style.fontSize = "36px";
quoteText.style.textAlign = "center";

quoteImage.src = "https://i.imgur.com/0rcsLVJ.jpg";
