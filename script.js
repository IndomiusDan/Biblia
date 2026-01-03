// --- 1. BASE DE DATOS DE VERSÍCULOS ---
// Puedes añadir más copiando el bloque { ... },
const bibleData = [
    {
        ref: "Filipenses 4:13",
        text: "Todo lo puedo en Cristo que me fortalece.",
        ex: "No significa que tendrás superpoderes, sino que Dios te dará la fuerza necesaria para aguantar y superar cualquier situación difícil que vivas."
    },
    {
        ref: "Salmos 23:1",
        text: "El Señor es mi pastor, nada me faltará.",
        ex: "Imagina que eres una oveja y Dios es quien te cuida. Él sabe dónde hay agua y comida, así que si confías en Él, no tienes de qué preocuparte."
    },
    {
        ref: "Proverbios 3:5",
        text: "Confía en el Señor de todo corazón, y no en tu propia inteligencia.",
        ex: "A veces creemos que nos las sabemos todas, pero este versículo nos recuerda que los planes de Dios son mejores que los nuestros, aunque no los entendamos ahora."
    },
    {
        ref: "Mateo 6:34",
        text: "No se preocupen por el día de mañana, porque el día de mañana traerá sus propias preocupaciones.",
        ex: "Jesús nos dice: 'Relájate'. No te agobies por el examen de la semana que viene. Enfócate en hacerlo bien hoy, paso a paso."
    },
    {
        ref: "Josué 1:9",
        text: "Sé fuerte y valiente. No tengas miedo ni te desanimes, porque el Señor tu Dios estará contigo dondequiera que vayas.",
        ex: "Es normal tener miedo ante cosas nuevas, pero recuerda que nunca estás solo. Dios es como ese compañero fiel que va contigo a todas partes."
    }
];

// --- 2. ELEMENTOS DEL DOM ---
const btnGenerate = document.getElementById('btn-generate');
const verseCard = document.getElementById('verse-card');
const refDisplay = document.getElementById('verse-reference');
const textDisplay = document.getElementById('verse-text');
const exDisplay = document.getElementById('verse-explanation');
const streakCountDisplay = document.getElementById('streak-count');

// --- 3. LÓGICA DE RACHAS (GAMIFICACIÓN) ---
function checkStreak() {
    let streak = parseInt(localStorage.getItem('bibleStreak')) || 0;
    const lastVisit = localStorage.getItem('lastVisitDate');
    const today = new Date().toDateString(); // Formato: "Sat Jan 03 2026"

    // Si es la primera vez que entra hoy
    if (lastVisit !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        // Si no entró ayer (y no es la primera vez nunca), reiniciamos
        if (lastVisit !== yesterday.toDateString() && lastVisit !== null) {
            streak = 0; 
        }
    }

    streakCountDisplay.innerText = streak;
    return streak;
}

function updateStreak() {
    let streak = parseInt(localStorage.getItem('bibleStreak')) || 0;
    const lastVisit = localStorage.getItem('lastVisitDate');
    const today = new Date().toDateString();

    // Solo aumentamos si la última visita NO fue hoy
    if (lastVisit !== today) {
        streak++;
        localStorage.setItem('bibleStreak', streak);
        localStorage.setItem('lastVisitDate', today);
        streakCountDisplay.innerText = streak;
        
        // Animación visual de fuego
        const fireIcon = document.querySelector('.fa-fire');
        fireIcon.style.transform = "scale(1.5)";
        setTimeout(() => fireIcon.style.transform = "scale(1)", 300);
    }
}

// --- 4. GENERADOR DE VERSÍCULOS ---
function showRandomVerse() {
    // Efecto de carga
    verseCard.classList.add('hidden');
    
    setTimeout(() => {
        // Elegir uno al azar
        const randomIndex = Math.floor(Math.random() * bibleData.length);
        const verse = bibleData[randomIndex];

        // Pintar en pantalla
        refDisplay.innerText = verse.ref;
        textDisplay.innerText = `"${verse.text}"`;
        exDisplay.innerText = verse.ex;

        // Mostrar tarjeta
        verseCard.classList.remove('hidden');
        
        // Actualizar racha
        updateStreak();
        
        // Scroll suave hacia la tarjeta
        verseCard.scrollIntoView({ behavior: 'smooth' });

    }, 200); // Pequeña pausa para transición
}

// --- 5. INICIALIZACIÓN ---
// Cargar racha al abrir la app
checkStreak();

// Event Listener
btnGenerate.addEventListener('click', showRandomVerse);