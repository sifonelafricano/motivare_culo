// Definisci le sezioni e le relative frasi motivazionali
const sections = [
    {
        id: "section-a",
        content: "Inserisci il testo per la Sezione A qui...",
    },
    {
        id: "section-b",
        content: "Inserisci il testo per la Sezione B qui...",
    },
    {
        id: "section-c",
        content: "Inserisci il testo per la Sezione C qui...",
    }
    // Aggiungi altre sezioni e il loro contenuto qui
];

// Funzione per inizializzare le sezioni
function initializeSections() {
    const container = document.querySelector(".container");
    
    sections.forEach(section => {
        const sectionElement = document.createElement("div");
        sectionElement.id = section.id;
        sectionElement.innerHTML = section.content;
        
        container.appendChild(sectionElement);
    });
}

// Chiama la funzione di inizializzazione delle sezioni
initializeSections();

// Funzione per generare una citazione casuale
function generateRandomQuote() {
    const quotes = [
        "You are capable of more than you know.",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "Don't watch the clock; do what it does. Keep going.",
        "Believe you can and you're halfway there.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        // Aggiungi altre frasi motivazionali qui
    ];
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Gestione del click sul pulsante per generare una citazione
const quoteButton = document.getElementById("quoteButton");
const quoteText = document.getElementById("quoteText");

quoteButton.addEventListener("click", function () {
    const randomQuote = generateRandomQuote();
    quoteText.textContent = randomQuote;
});

// Stile del testo delle citazioni
quoteText.style.fontFamily = "Comic Sans MS, cursive";
quoteText.style.fontSize = "36px";
quoteText.style.textAlign = "center";

// Immagine motivazionale
const quoteImage = document.getElementById("quoteImage");
quoteImage.src = "https://i.imgur.com/0rcsLVJ.jpg";
