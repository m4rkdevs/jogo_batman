const batman = document.querySelector('.batman');
const pipe = document.querySelector('.pipe');
const sun = document.querySelector('.sun');
const clouds = document.querySelector('.cloud');
const score = document.querySelector('.score');
const end = document.querySelector('.game-over');
const gameBoard = document.querySelector('.game-board');
var count = 0;



const theme = new Audio('../music/batman.mp3');
const gameOver = new Audio('../music/batman_sound.mp3');

theme.play();
theme.loop = true;


const jump = () => {
    batman.classList.add('jump');

    setTimeout(() => {
        batman.classList.remove('jump');
    }, 500)
}

const time = setInterval(() => {
    count++;

    document.getElementById('count').innerHTML = count;
}, 1);

const loop = setInterval(() => {

    const pipePostion = pipe.offsetLeft;
    const batmanPostion = +window.getComputedStyle(batman).bottom.replace('px', '');

    console.log(batmanPostion);

    // Game over
    if (pipePostion <= 85 && pipePostion > 0 && batmanPostion < 89) {

        // Configura posição e animação do pipe
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePostion}px`;

        // Configura posição, animação, src e tamanho do mario
        batman.style.animation = 'none';
        batman.style.bottom = `${batmanPostion}px`;
        batman.style.width = `90px`;
        batman.style.marginLeft = `25px`;
        batman.src = "./imagem/Morcego.png"
        batman.style.animation = 'dead-animation 8000ms ease-out';
        batman.style.bottom = `-500px`;
        

        // Música
        theme.pause();
        gameOver.play();

        setInterval(() => {
            pipe.style.display = 'none';
            batman.style.display = 'none';
            sun.style.display = 'none';
            clouds.style.display = 'none';
            score.style.display = 'none';
            gameBoard.style.background = 'black';
            gameBoard.style.borderColor = 'black';
        }, 3000)

        const loop2 = setInterval(() => {
            end.style.display = 'block';
            document.getElementById('countEnd').innerHTML = count;
        }, 4000)



        clearInterval(loop);
        clearInterval(time);
    }

}, 10)


function reloadPage() {
    document.location.reload(true);
}

document.addEventListener('keydown', jump);