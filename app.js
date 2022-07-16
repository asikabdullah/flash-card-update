const term = document.querySelector('.term');

const definition = document.querySelector('.definition')
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');


let words = {
    "Quiescence": "Inactivity",
    "Inertia": "Resistence to move",
    "Impetus": "Moving force",
    "Abeyance": "Temporary pause",
    "Scurry": "move or proceed quickly",
    "Gesticulate": "Express through hand movement",
    "Palpitation": "A shaky motion",
    "Appellation": "Name, title",
    "Sobriquet": "Nickname",
    "Misnomer": "Incorrect designation"
}

let data = Object.entries(words)

function getRandomWord() {

    let randomTerm = data[Math.floor(Math.random() * data.length)]
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`;
}

checkButton.addEventListener('click', function() {
    definition.style.display = 'block'; 
});

nextButton.addEventListener('click', function() {
    getRandomWord();
});

