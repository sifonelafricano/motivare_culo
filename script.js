// Funzione per inizializzare le sezioni
function initializeSections() {
    const container = document.querySelector(".container");
    
    const sections = [
        {
            id: "section-a",
            title: "Sezione A",
            content: "Inserisci il testo per la Sezione A qui...",
        },
        {
            id: "section-b",
            title: "Sezione B",
            content: "Inserisci il testo per la Sezione B qui...",
        },
        {
            id: "section-c",
            title: "Sezione C",
            content: "Inserisci il testo per la Sezione C qui...",
        }
        // Aggiungi altre sezioni e il loro contenuto qui
    ];

    sections.forEach(section => {
        const sectionElement = document.createElement("div");
        sectionElement.id = section.id;

        const heading = document.createElement("h2");
        heading.textContent = section.title;

        const paragraph = document.createElement("p");
        paragraph.textContent = section.content;

        sectionElement.appendChild(heading);
        sectionElement.appendChild(paragraph);

        container.appendChild(sectionElement);
    });
}

// Chiama la funzione di inizializzazione delle sezioni
initializeSections();
