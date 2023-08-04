const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')

const winingScoreDisplay = document.querySelector('p span');

const input = document.getElementById('input')

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const reset = document.getElementById('reset')


var p1 = 0
var p2 = 0
    // p1 = p2 = oldscore
let win = 5;

let gameover = false

function winner(oldscore, win) {
    if (oldscore === win) {
        if (p1 === win) {
            player1.classList.add('winner')

        } else {
            player2.classList.add('winner')

        }

        gameover = true
        btn1.setAttribute('disabled', 'disabled')
        btn2.setAttribute('disabled', 'disabled')

    }


}

btn1.addEventListener('click', () => {
    if (!gameover) {
        p1 = p1 + 1;
        // if (win === p1) {
        //     gameover = true
        //     btn1.setAttribute('disabled', 'disabled')
        //     btn2.setAttribute('disabled', 'disabled')

        // }
        winner(p1, win)
        player1.textContent = p1
    }




})

btn2.addEventListener('click', () => {
    if (!gameover) {
        p2 = p2 + 1

        // if (win === p2) {
        //     gameover = true
        //     btn1.setAttribute('disabled', 'disabled')
        //     btn2.setAttribute('disabled', 'disabled')

        // }
        winner(p2, win)
        player2.textContent = p2;

    }



})
input.addEventListener('change', () => {
    // console.log(input.value)
    win = Number(input.value)
    winingScoreDisplay.textContent = input.value;
    input.value = '';
    reset()
})

reset.addEventListener('click', () => {
    p1 = 0;
    p2 = 0;
    gameover = false;
    player1.textContent = 0;
    player2.textContent = 0;
    btn1.removeAttribute('disabled')
    btn2.removeAttribute('disabled')
    player1.classList.remove('winner')
    player2.classList.remove('winner')




})