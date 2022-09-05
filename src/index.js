// Main module where everything comes together

import './style.css';
import Gameboard from './gameboard.js';
import drawBoard from './interface';

const gameboard1 = Gameboard();
const gameboard2 = Gameboard();
const board1 = document.querySelector('.first');
const board2 = document.querySelector('.second');

drawBoard(gameboard1, board1);
drawBoard(gameboard2, board2);