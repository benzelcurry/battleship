// Main module where everything comes together

// Notes:
// 1. Modules are tightly coupled; this isn't good practice and should be fixed if this
// ends up becoming a portfolio piece.
// 2. Code could be cleaned up by creating additional modules and reducing the overall
// size of each one.
// 3. Variable naming is not consistent among modules; this should be improved upon in
// future projects.

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

board2.addEventListener('click', (e) => {
    if (e.target.classList.contains('been-hit')) {
        return;
    } else {
        setTimeout(attackPlayer, 1000);
        setTimeout(e.target.classList.add('been-hit'), 1500);
    };
});

let missCap = 0;
let lastHit;
let didHit = false;

// Should go into its own module
const attackPlayer = () => {
    let location = getRandomNum(100);
    let chooseHit = getRandomNum(5);
    if (playerChildren[location].textContent === 'O' || playerChildren[location].textContent === 'X') {
        attackPlayer();
    } else if (didHit === true) {
        if (chooseHit === 1) {
            attackHelper(lastHit - 1);
        } else if (chooseHit === 2) {
            attackHelper(lastHit + 1);
        } else if (chooseHit === 3) {
            attackHelper(lastHit - 10);
        } else {
            attackHelper(lastHit + 10);
        }
    } else if (gameboard1.receiveAttack(location) === 'hit') {
        lastHit = location;
        didHit = true;
        gameboard1.receiveAttack(location)
        playerChildren[location].textContent = 'O';
        playerChildren[location].style.color = 'green';
    } else {
        gameboard1.receiveAttack(location)
        playerChildren[location].textContent = 'X';
        playerChildren[location].style.color = 'red';
    };
    sunkHelper();
}

const attackHelper = (newLocation) => {
    if (playerChildren[newLocation] === undefined) {
        attackPlayer();
    } else if (playerChildren[newLocation].textContent === 'O' || playerChildren[newLocation].textContent === 'X') {
        missCap += 0.25;
        if (missCap > 3) {
            didHit = false;
        }
        attackPlayer();
    } else if (gameboard1.receiveAttack(newLocation) === 'hit') {
        missCap = 0;
        lastHit = newLocation;
        didHit = true;
        gameboard1.receiveAttack(newLocation)
        playerChildren[newLocation].textContent = 'O';
        playerChildren[newLocation].style.color = 'green';
    } else {
        missCap++;
        gameboard1.receiveAttack(newLocation)
        playerChildren[newLocation].textContent = 'X';
        playerChildren[newLocation].style.color = 'red';
        if (missCap > 3) {
            didHit = false;
        };
    };
}

const xtraSmallSunk = document.createElement('div');
xtraSmallSunk.classList.add('sunk');
xtraSmallSunk.textContent = 'Extra small ship sunk';

const smallSunk = document.createElement('div');
smallSunk.classList.add('sunk');
smallSunk.textContent = 'Small ship sunk';

const medSunk = document.createElement('div');
medSunk.classList.add('sunk');
medSunk.textContent = 'Medium ship sunk';

const bigSunk = document.createElement('div');
bigSunk.classList.add('sunk');
bigSunk.textContent = 'Big Ship sunk';

const hugeSunk = document.createElement('div');
hugeSunk.classList.add('sunk');
hugeSunk.textContent = 'Huge ship sunk';

const sunkHelper = () => {
    // Appends which ships have been sunken to the scoreboard
    if (!gameboard1.xtraSmallShip.index.includes('O')) {
        player1Status.appendChild(xtraSmallSunk);
    };
    
    if (!gameboard1.smallShip.index.includes('O')) {
        player1Status.appendChild(smallSunk);
    };

    if (!gameboard1.medShip.index.includes('O')) {
        player1Status.appendChild(medSunk);
    };

    if (!gameboard1.bigShip.index.includes('O')) {
        player1Status.appendChild(bigSunk);
    };

    if (!gameboard1.hugeShip.index.includes('O')) {
        player1Status.appendChild(hugeSunk);
    };
}