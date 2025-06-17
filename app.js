const p1 = {
    score : 0,
    button : document.querySelector('#player1point'),
    display : document.querySelector('#player1'), 

}

const p2 = {
    score : 0,
    button : document.querySelector('#player2point'),
    display : document.querySelector('#player2'), 

}

const reset = document.querySelector('#reset');
const selected = document.querySelector('#numberSelect');

let highScore = 5;
let gameOver = false;

function updateScores(player, opponent) {
    if (!gameOver) {
        player.score++; 
        player.display.innerText = player.score;
        if (player.score === highScore) {
            gameOver = true;
            player.display.classList.add('green')
            opponent.display.classList.add('red')
        }
        }
}

selected.addEventListener('change', function setHighScore() {
    resetScore();
    highScore = parseInt(this.value);
})

p1.button.addEventListener('click', () => {
 updateScores(p1, p2)    
});

p2.button.addEventListener('click', () => {
updateScores(p2, p1)
});

function resetScore() {
    gameOver = false;
    for (let p of [p1, p2]) {
    p.display.innerText = 0; 
    p.display.classList.remove('red', 'green');
    p.score = 0; 
    }
   
    
}
reset.addEventListener('click', resetScore)


