const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')

const winingScoreDisplay = document.querySelector('p span');

const input = document.getElementById('input')

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const reset = document.getElementById('reset')


let p1 = 0
let p2 = 0
let win = 5;

let gameover = false

btn1.addEventListener('click', () => {
    if (!gameover) {
        p1 = p1 + 1;
        if (win === p1) {
            gameover = true
            btn1.setAttribute('disabled', 'disabled')
            btn2.setAttribute('disabled', 'disabled')

        }
        player1.textContent = p1
    }

})

btn2.addEventListener('click', () => {
    if (!gameover) {
        p2 = p2 + 1

        if (win === p2) {
            gameover = true
            btn1.setAttribute('disabled', 'disabled')
            btn2.setAttribute('disabled', 'disabled')

        }
        player2.textContent = p2;
    }

})
reset.addEventListener('click', () => {
    p1 = 0;
    p2 = 0;
    gameover = false;
    player1.textContent = 0;
    player2.textContent = 0;
    btn1.removeAttribute('disabled')
    btn2.removeAttribute('disabled')


})