import HangmanClass from './hangman';
import getPuzzle from './requests';

const puzzleEl = document.querySelector('#puzzle');
const statusMsgEl = document.querySelector('#statusMsgEl');

let hangman;

window.addEventListener('keypress',  (e) => {
    const guess = String.fromCharCode(e.charCode);
    hangman.makeGuess(guess);
    render();
});

const render = () =>{
    puzzleEl.innerHTML = '';
    statusMsgEl.textContent = hangman.statusMessage();
    hangman.getPuzzle().split('').forEach((letter) => {
        const letterEl = document.createElement('span');
        letterEl.textContent = letter;
        puzzleEl.appendChild(letterEl);
    });
};

const startGame = async () => {
    const puzzle = await getPuzzle('1');
    hangman = new HangmanClass(puzzle, Math.round(puzzle.length));
    render();
};

document.querySelector('#reset').addEventListener('click', startGame)
startGame();









