const player1_score = document.querySelector('#player1');
const player2_score = document.querySelector('#player2');

let player1 = 0;
let player2 = 0;
let highScore = 5;
let gameOver = false;
const player1point = document.querySelector('#player1point');
const player2point = document.querySelector('#player2point');
const reset = document.querySelector('#reset');

player1point.addEventListener('click', () => {
    if (!gameOver) {
        player1++; 
        player1_score.innerText = player1;
        if (player1 === highScore) {
            gameOver = true;
        }
    }
    
});

player2point.addEventListener('click', () => {
    if (!gameOver) {
        player2++; 
        player2_score.innerText = player2;
        if (player2 === highScore) {
            gameOver = true;
        }
    }
});

reset.addEventListener('click', () => {
    player1_score.innerText = 0; 
    player2_score.innerText = 0; 
    player1 = 0; 
    player2 = 0;
    gameOver = false;
})


