// Main module where everything comes together

// Steps to complete before project completion:
// 1. ADD BUTTON TO ALLOW USERS TO PLACE SHIPS VERTICALLY
// 1.1 ADD OPTIONS TO PLACEMENT FUNCTIONS TO ENSURE SHIPS AREN'T OVERLAPPING/GOING OFF EDGES WHEN VERTICAL
// 2. MAKE SHIPS PLACE RANDOMLY ON COMPUTER'S BOARD
// 3. ADD A TURN-BASED SYSTEM
// 4. GIVE COMPUTER A BASIC AI
// 5. ANNOUNCE WINNER ONCE GAME IS OVER

import './style.css';
import Gameboard from './gameboard.js';
import drawBoard from './interface';

const gameboard1 = Gameboard();
const gameboard2 = Gameboard();
const board1 = document.querySelector('.first');
const board2 = document.querySelector('.second');
const player1Status = document.querySelector('.player1');
const player2Status = document.querySelector('.player2');

drawBoard(gameboard1, board1, player1Status);
drawBoard(gameboard2, board2, player2Status);