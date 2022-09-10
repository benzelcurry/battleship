// Main module where everything comes together

// Steps to complete before project completion:
// 1. MAKE SHIPS PLACE RANDOMLY ON COMPUTER'S BOARD
// 2. ADD A TURN-BASED SYSTEM
// 3. GIVE COMPUTER A BASIC AI
// 4. ANNOUNCE WINNER ONCE GAME IS OVER

import './style.css';
import Gameboard from './gameboard.js';
import drawBoard from './interface';

const gameboard1 = Gameboard();
const gameboard2 = Gameboard();
const board1 = document.querySelector('.first');
const board2 = document.querySelector('.second');
const player1Status = document.querySelector('.player1');
const player2Status = document.querySelector('.player2');
const player2Container = document.querySelector('.board-container2');
let computer;

drawBoard(gameboard1, board1, player1Status, computer = false, player2Container);
drawBoard(gameboard2, board2, player2Status, computer = true);

const getRandomNum = (max) => {
    return Math.floor(Math.random() * max);
}

const playerChildren = board1.children;

board2.addEventListener('click', () => {
    setTimeout(attackPlayer, 1000);
});

// Should go into its own module
const attackPlayer = () => {
    let location = getRandomNum(99);
    console.log(gameboard1.board);
    if (playerChildren[location].textContent === 'O' || playerChildren[location].textContent === 'X') {
        attackPlayer();
    } else if (gameboard1.receiveAttack(location) === 'hit') {
        gameboard1.receiveAttack(location)
        playerChildren[location].textContent = 'O';
        playerChildren[location].style.color = 'green';
    } else {
        gameboard1.receiveAttack(location)
        playerChildren[location].textContent = 'X';
        playerChildren[location].style.color = 'red';
    };
}

console.log(gameboard1.board);