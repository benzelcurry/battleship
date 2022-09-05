import './style.css';
import Gameboard from './gameboard.js';

const gameboard1 = Gameboard();
const gameboard2 = Gameboard();

const board1 = document.querySelector('.first');

const board2 = document.querySelector('.second');

for (let i = 0; i < gameboard1.board.length; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    board1.appendChild(square);
}

for (let i = 0; i < gameboard2.board.length; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    board2.appendChild(square);
}