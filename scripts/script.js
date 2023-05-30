const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];



const btnEasy = document.getElementById('btnEasy');
btnEasy.addEventListener('click', (e)=> {
    iniciarJuego(12, 3);
    btnEasy.style.display='none';
    btnMedium.style.display='none';
    btnHard.style.display='none';
});

const btnMedium = document.getElementById('btnMedium');
btnMedium.addEventListener('click', (e)=> {
    iniciarJuego(10, 2);
    btnEasy.style.display='none';
    btnMedium.style.display='none';
    btnHard.style.display='none';
});

const btnHard = document.getElementById('btnHard');
btnHard.addEventListener('click', (e)=> {
    iniciarJuego(10, 1);
    btnEasy.style.display='none';
    btnMedium.style.display='none';
    btnHard.style.display='none';
});

function iniciarJuego(time, addTime) {
var palabraAleatoria;
var score = 0;
const inputDisabled = document.getElementById('text');
inputDisabled.focus();

function randomWords(){
    if (words.length>0){
        const aleatorio = words[Math.floor(Math.random() * words.length)];
        palabraAleatoria = aleatorio.toLowerCase();
        addToDom();
        for (let i=0; i<words.length; i++){
            if (palabraAleatoria == words[i]){
                words.splice(i, 1);
            } 
        }
    } else{
        congrats();
        clearInterval(timer);
        inputDisabled.disabled = true;
    }
}
randomWords()

function addToDom(){ 
    const h1After = document.getElementById('randomWord');
    h1After.textContent = palabraAleatoria
};

const input = document.getElementById('text');
input.addEventListener('input', function(){
    let palabraIngresada = this.value.toLowerCase();
    if (palabraAleatoria == palabraIngresada){
        limpiar();
        time+=addTime; 
        score+=1;
        document.getElementById('score').textContent = score;
        document.getElementById('timeSpan').innerHTML = time+ 's';
        randomWords();  
    } 
});

function limpiar(){
    input.value='';
}

const timer = setInterval(()=>{
    document.getElementById('timeSpan').innerHTML = time + 's';
    if(time == 0){
        clearInterval(timer)
        gameOver();
    } else{
        time--;
    }
},1000);


function gameOver() {
    inputDisabled.disabled = true;
    const endGameContainer = document.getElementById('end-game-container');
    const titulo = document.createElement('h3');
    titulo.textContent = ('GAME OVER, TRY AGAIN');
    endGameContainer.appendChild(titulo);
    const puntuacionFinalParrafo = document.createElement('p');
    puntuacionFinalParrafo.textContent = 'YOUR SCORE: ' ;
    const PuntuacionFinalNumero = document.createElement('span'); 
    PuntuacionFinalNumero.textContent = score + ' points';
    endGameContainer.appendChild(puntuacionFinalParrafo);
    puntuacionFinalParrafo.appendChild(PuntuacionFinalNumero);
    const btnReStart = document.createElement('button');
    btnReStart.classList.add('css-button-sliding-to-bottom--blue');
    btnReStart.textContent = 'START OVER';
    btnReStart.addEventListener('click', function () {
        location.reload();
    });
    endGameContainer.appendChild(btnReStart);
}


function congrats() {
    const endGameContainer = document.getElementById('end-game-container');
    const titulo = document.createElement('h3');
    titulo.textContent = ('YOU WIN');
    endGameContainer.appendChild(titulo);
    const puntuacionFinalParrafo = document.createElement('p');
    puntuacionFinalParrafo.textContent = 'YOUR SCORE: ' ;
    const PuntuacionFinalNumero = document.createElement('span'); 
    PuntuacionFinalNumero.textContent = score + ' points';
    endGameContainer.appendChild(puntuacionFinalParrafo);
    puntuacionFinalParrafo.appendChild(PuntuacionFinalNumero);
    const btnReStart = document.createElement('button');
    btnReStart.classList.add('css-button-sliding-to-bottom--blue');
    btnReStart.textContent = 'START OVER';
    btnReStart.addEventListener('click', function () {
        location.reload();
    });
    endGameContainer.appendChild(btnReStart);
}

}
