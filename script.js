// --- BASE DE DATOS DE 50 VERSÍCULOS ---
const bibleData = [
    { ref: "Filipenses 4:13", text: "Todo lo puedo en Cristo que me fortalece.", ex: "No significa que serás Superman, sino que Dios te dará fuerzas para aguantar exámenes, problemas o días tristes." },
    { ref: "Salmos 23:1", text: "El Señor es mi pastor, nada me faltará.", ex: "Como un pastor cuida de sus ovejas y sabe dónde hay pasto, Dios sabe exactamente lo que necesitas hoy." },
    { ref: "Proverbios 3:5", text: "Confía en el Señor de todo corazón, y no en tu propia inteligencia.", ex: "A veces creemos que nos las sabemos todas, pero los planes de Dios son mejores, aunque ahora no los entiendas." },
    { ref: "Mateo 6:34", text: "No se preocupen por el día de mañana, porque el día de mañana traerá sus propias preocupaciones.", ex: "Jesús te dice: 'Relájate'. No te agobies hoy por lo que pasará la semana que viene. Vive un día a la vez." },
    { ref: "Josué 1:9", text: "Sé fuerte y valiente. No tengas miedo ni te desanimes, porque el Señor tu Dios estará contigo.", ex: "Es normal tener miedo ante cosas nuevas, pero recuerda que Dios es tu compañero de equipo fiel." },
    { ref: "Jeremías 29:11", text: "Yo sé los planes que tengo para ustedes, planes de bienestar y no de calamidad.", ex: "Aunque las cosas salgan mal hoy, Dios ya tiene preparado el final de tu historia, y es un final bueno." },
    { ref: "Romanos 8:28", text: "Sabemos que Dios dispone todas las cosas para el bien de quienes lo aman.", ex: "Hasta de los errores o los momentos vergonzosos, Dios puede sacar algo bueno para ti si confías en Él." },
    { ref: "Isaías 41:10", text: "No temas, porque yo estoy contigo; no te angusties, porque yo soy tu Dios.", ex: "Cuando sientas ansiedad en el pecho, respira hondo y recuerda que el Creador del universo está a tu lado." },
    { ref: "Juan 3:16", text: "Porque tanto amó Dios al mundo que dio a su Hijo unigénito, para que todo el que cree en él no se pierda.", ex: "Es la prueba definitiva de amor: Dios te quiere tanto que dio lo más valioso que tenía por ti." },
    { ref: "1 Corintios 13:4", text: "El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.", ex: "Amar no es solo sentir mariposas; es tener paciencia con tus amigos incluso cuando son molestos." },
    { ref: "Gálatas 5:22", text: "El fruto del Espíritu es amor, alegría, paz, paciencia, amabilidad, bondad, fidelidad...", ex: "Si estás cerca de Dios, tu personalidad cambiará para bien: serás esa persona que cae bien a todos por su buena vibra." },
    { ref: "Efesios 6:11", text: "Pónganse toda la armadura de Dios para que puedan hacer frente a las artimañas del diablo.", ex: "La fe, la verdad y la justicia son como un equipo de protección (como en un juego) para que nada malo te afecte." },
    { ref: "Salmos 119:105", text: "Tu palabra es una lámpara a mis pies; es una luz en mi sendero.", ex: "La Biblia es como la linterna del móvil en un cuarto oscuro: te ayuda a no tropezar y ver por dónde vas." },
    { ref: "Proverbios 17:17", text: "En todo tiempo ama el amigo; para ayudar en la adversidad nació el hermano.", ex: "Un amigo de verdad no es el que solo está en la fiesta, sino el que se queda contigo cuando estás triste." },
    { ref: "Mateo 7:12", text: "Así que en todo traten ustedes a los demás tal y como quieren que ellos los traten a ustedes.", ex: "La Regla de Oro: Si no te gusta que te critiquen, no critiques. Si quieres respeto, respeta primero." },
    { ref: "Santiago 1:5", text: "Si a alguno de ustedes le falta sabiduría, pídasela a Dios, y él se la dará.", ex: "Si no sabes qué decisión tomar o qué estudiar, pregúntale a Dios. Él no te dejará en 'visto'." },
    { ref: "1 Juan 1:9", text: "Si confesamos nuestros pecados, Dios, que es fiel y justo, nos los perdonará.", ex: "No importa lo que hayas hecho; si lo admites y pides perdón de corazón, Dios hace 'borrón y cuenta nueva'." },
    { ref: "Salmos 19:1", text: "Los cielos cuentan la gloria de Dios, el firmamento proclama la obra de sus manos.", ex: "Mira las estrellas o un atardecer. Esa belleza es la 'firma' de Dios para que sepas que Él existe." },
    { ref: "Mateo 5:14", text: "Ustedes son la luz del mundo. Una ciudad en lo alto de una colina no puede esconderse.", ex: "No escondas tus talentos ni tu bondad. Estás aquí para brillar y dar ejemplo a tus compañeros." },
    { ref: "Salmos 46:1", text: "Dios es nuestro amparo y nuestra fortaleza, nuestra ayuda segura en momentos de angustia.", ex: "Cuando sientas que el mundo se te cae encima, Dios es tu refugio seguro, tu 'zona segura'." },
    { ref: "Isaías 40:31", text: "Pero los que confían en el Señor renovarán sus fuerzas; volarán como las águilas.", ex: "Cuando estás agotado y crees que no puedes más, Dios te da un 'boost' de energía extra." },
    { ref: "Romanos 12:2", text: "No se amolden al mundo actual, sino sean transformados mediante la renovación de su mente.", ex: "No hagas cosas solo porque 'todos lo hacen'. Ten personalidad propia y haz lo correcto." },
    { ref: "Proverbios 15:1", text: "La respuesta amable calma el enojo, pero la agresiva echa leña al fuego.", ex: "Si alguien te grita, no grites de vuelta. Responder tranquilo te da el control de la situación." },
    { ref: "Eclesiastés 3:1", text: "Todo tiene su momento oportuno; hay un tiempo para todo lo que se hace bajo el cielo.", ex: "No tengas prisa por crecer o tener cosas. Disfruta tu edad, cada etapa de la vida tiene su magia." },
    { ref: "2 Timoteo 1:7", text: "Pues Dios no nos ha dado un espíritu de timidez, sino de poder, de amor y de dominio propio.", ex: "No eres un cobarde. Tienes dentro de ti la capacidad de controlar tus emociones y actuar con fuerza." },
    { ref: "Salmos 37:4", text: "Deléitate en el Señor, y él te concederá los deseos de tu corazón.", ex: "Si pones a Dios primero y buscas lo bueno, verás cómo tus sueños empiezan a cumplirse." },
    { ref: "Mateo 28:20", text: "Y asegúrense de esto: que estoy con ustedes siempre, hasta el fin del mundo.", ex: "Es la promesa final de Jesús. Nunca, ni por un segundo, has estado o estarás solo." },
    { ref: "1 Pedro 5:7", text: "Depositen en él toda ansiedad, porque él cuida de ustedes.", ex: "Imagina que metes todas tus preocupaciones en una mochila y se la das a Dios para que la cargue Él." },
    { ref: "Colosenses 3:23", text: "Hagan lo que hagan, trabajen de buena gana, como para el Señor y no como para nadie más.", ex: "Ya sea estudiar, limpiar tu cuarto o jugar: hazlo excelente, como si Dios fuera tu jefe." },
    { ref: "Salmos 139:14", text: "¡Te alabo porque soy una creación admirable! ¡Tus obras son maravillosas!", ex: "No te compares con los de Instagram. Dios te diseñó a ti pieza por pieza y no comete errores." },
    { ref: "Juan 14:6", text: "Yo soy el camino, la verdad y la vida.", ex: "Jesús es el GPS. Si te sientes perdido en la vida, síguelo a Él y encontrarás el destino correcto." },
    { ref: "Lamentaciones 3:22-23", text: "El gran amor del Señor nunca se acaba, y su compasión jamás se agota.", ex: "La paciencia de Dios es infinita. Aunque falles mil veces, Él te dará mil y una oportunidades." },
    { ref: "Hebreos 11:1", text: "Ahora bien, la fe es la garantía de lo que se espera, la certeza de lo que no se ve.", ex: "Tener fe es confiar en que Dios va a actuar, incluso cuando todavía no ves la solución con tus ojos." },
    { ref: "Proverbios 4:23", text: "Por sobre todas las cosas cuida tu corazón, porque de él mana la vida.", ex: "Ten cuidado con lo que ves en internet y la música que escuchas, porque eso alimenta tu alma." },
    { ref: "Marcos 9:23", text: "¿Cómo que si puedes? Para el que cree, todo es posible.", ex: "No te pongas límites mentales. Si tienes fe, puedes lograr cosas que parecen imposibles." },
    { ref: "Lucas 6:31", text: "Traten a los demás tal y como quieren que ellos los traten a ustedes.", ex: "Es simple: si quieres amigos leales, sé leal. Si quieres que te perdonen, perdona tú primero." },
    { ref: "Salmos 56:3", text: "Cuando siento miedo, pongo en ti mi confianza.", ex: "El miedo es una emoción normal, pero la confianza en Dios es la herramienta para vencerlo." },
    { ref: "Isaías 9:6", text: "Porque nos ha nacido un niño... y se le darán estos nombres: Admirable Consejero.", ex: "Jesús no es solo una historia antigua; es tu Consejero personal para los problemas de hoy." },
    { ref: "Juan 16:33", text: "En este mundo afrontarán aflicciones, pero ¡anímense! Yo he vencido al mundo.", ex: "Vas a tener días malos, es inevitable. Pero anímate, porque Jesús ya ganó la batalla final por ti." },
    { ref: "Salmos 118:24", text: "Este es el día en que el Señor actuó; regocijémonos y alegrémonos en él.", ex: "No esperes al fin de semana para ser feliz. Hoy es un regalo de Dios, ¡disfrútalo!" },
    { ref: "2 Corintios 5:17", text: "Por lo tanto, si alguno está en Cristo, es una nueva creación.", ex: "Con Dios siempre puedes empezar de cero. Tu pasado no define tu futuro." },
    { ref: "Efesios 4:32", text: "Más bien, sean bondadosos y compasivos unos con otros, y perdónense mutuamente.", ex: "Guardar rencor es como beber veneno esperando que le duela al otro. Perdona y serás libre." },
    { ref: "1 Juan 4:18", text: "En el amor no hay temor, sino que el amor perfecto echa fuera el temor.", ex: "Si sabes cuánto te ama Dios, dejarás de tener miedo al rechazo de los demás." },
    { ref: "Mateo 11:28", text: "Vengan a mí todos ustedes que están cansados y agobiados, y yo les daré descanso.", ex: "Cuando sientas que no puedes más con la escuela o los problemas, habla con Jesús. Él te da paz." },
    { ref: "Romanos 12:21", text: "No te dejes vencer por el mal; al contrario, vence el mal con el bien.", ex: "Si alguien te hace algo malo, no te vengues. Hacer el bien es la forma más valiente de ganar." },
    { ref: "Salmos 51:10", text: "Crea en mí, oh Dios, un corazón limpio, y renueva la firmeza de mi espíritu.", ex: "Una oración perfecta para cuando sientes que has metido la pata y quieres limpiarte por dentro." },
    { ref: "Gálatas 6:9", text: "No nos cansemos de hacer el bien, porque a su debido tiempo cosecharemos si no nos damos por vencidos.", ex: "A veces parece que ser bueno no sirve de nada, pero sigue así. La recompensa llegará." },
    { ref: "Hebreos 13:8", text: "Jesucristo es el mismo ayer, y hoy, y por los siglos.", ex: "Todo cambia: tus amigos, tu cuerpo, la moda... Pero Jesús nunca cambia, siempre es fiel." },
    { ref: "Salmos 34:8", text: "Prueben y vean que el Señor es bueno; dichosos los que en él se refugian.", ex: "No creas en Dios solo porque te lo dicen. Pruébalo tú mismo, habla con Él y verás qué bueno es." },
    { ref: "Apocalipsis 3:20", text: "Mira que estoy a la puerta y llamo. Si alguno oye mi voz y abre la puerta, entraré.", ex: "Dios es un caballero, no entra a la fuerza en tu vida. Él espera a que tú le invites a entrar." }
];

// --- LOGICA DE LA APP (1 Versículo por Día) ---
const btnGenerate = document.getElementById('btn-generate');
const verseCard = document.getElementById('verse-card');
const refDisplay = document.getElementById('verse-reference');
const textDisplay = document.getElementById('verse-text');
const exDisplay = document.getElementById('verse-explanation');
const streakCountDisplay = document.getElementById('streak-count');
const instructionText = document.getElementById('instruction-text');

function checkDailyStatus() {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('dailyVerseDate');
    const savedVerseIndex = localStorage.getItem('dailyVerseIndex');

    // Recuperar racha
    let streak = parseInt(localStorage.getItem('bibleStreak')) || 0;
    streakCountDisplay.innerText = streak;

    // Si ya leyó hoy
    if (savedDate === today && savedVerseIndex !== null) {
        showSavedVerse(bibleData[savedVerseIndex]);
        disableButton();
    } else {
        // Comprobar si se rompió la racha ayer
        const lastVisit = localStorage.getItem('lastVisitDate');
        if (lastVisit) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (lastVisit !== yesterday.toDateString() && lastVisit !== today) {
                localStorage.setItem('bibleStreak', 0);
                streakCountDisplay.innerText = 0;
            }
        }
    }
}

function showSavedVerse(verse) {
    refDisplay.innerText = verse.ref;
    textDisplay.innerText = `"${verse.text}"`;
    exDisplay.innerText = verse.ex;
    verseCard.classList.remove('hidden');
}

function disableButton() {
    btnGenerate.classList.add('btn-disabled');
    btnGenerate.innerHTML = '<i class="fas fa-check"></i> Vuelve mañana';
    btnGenerate.disabled = true;
    instructionText.innerText = "Ya has leído tu palabra de hoy. Reflexiona sobre ella.";
}

function generateNewVerse() {
    // 1. Elegir versículo al azar
    const randomIndex = Math.floor(Math.random() * bibleData.length);
    const verse = bibleData[randomIndex];

    // 2. Guardar en memoria (Para que no pueda generar más hoy)
    const today = new Date().toDateString();
    localStorage.setItem('dailyVerseDate', today);
    localStorage.setItem('dailyVerseIndex', randomIndex);
    localStorage.setItem('lastVisitDate', today);

    // 3. Actualizar racha
    let streak = parseInt(localStorage.getItem('bibleStreak')) || 0;
    streak++;
    localStorage.setItem('bibleStreak', streak);
    streakCountDisplay.innerText = streak;

    // 4. Mostrar y Bloquear
    showSavedVerse(verse);
    disableButton();
    
    // Animación fuego
    const fireIcon = document.querySelector('.streak-container i');
    fireIcon.style.transform = "scale(1.5)";
    setTimeout(() => fireIcon.style.transform = "scale(1)", 300);

    verseCard.scrollIntoView({ behavior: 'smooth' });
}

// Iniciar
checkDailyStatus();
btnGenerate.addEventListener('click', generateNewVerse);