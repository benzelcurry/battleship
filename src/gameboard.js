// Creates and manages the gameboard
// Key: {
//     O = Ship (Not hit)
//     M = Miss 
//     X = Hit 
// }

const Ship = require('./ship');

const Gameboard = () => {
    let board = [];
    for (let i = 0; i < 100; i++) {
        board.push(' ');
    };

    // May need to add more ships
    const smallShip = Ship(3);
    let smallArr = ['O', 'O', 'O'];
    let medArr = ['O', 'O', 'O', 'O'];
    let bigArr = ['O', 'O', 'O', 'O', 'O']; 

    const placeShip = (index, ship) => {
        // Checks to see if ship will fit horizontally from left to right
        let stringIndex = String(index).split('')
        let firstNumIndex = stringIndex[0];
        let nextLine = String(index + ship.size).split('');
        let secondNumIndex = nextLine[0];
        let letter;

        if (firstNumIndex !== secondNumIndex) {
            return 'Error';
        // Assigns a letter to map the grid square to the ship object on it
        } else {
            if (ship.size === 3) {
                letter = 's';
            } else if (ship.size === 4) {
                letter = 'm';
            } else if (ship.size === 5) {
                letter = 'l';
            }

            for (let i = 0; i < ship.size; i++) {
                board[index + i] = ship.index[i] + letter;
            };
        };
    };

    // Will need to rewrite this to test for all ship sizes/arrays
    const receiveAttack = (index) => {
        if (board[index] === ' ') {
            board[index] = 'M'
        } else {
            if (board[index].split('').includes('s')) {
                placeDmg(smallArr);
                smallShip.index = smallArr;
            }

            board[index] = 'X'
        };
    };

    // Will need to rewrite to contain all possible grid values
    const gameover = () => {
        return (!board.includes('Os'));
    };

    // Helper function for determining small/med/bigArr hits
    const placeDmg = (arr) => {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'O') {
                count++;
            };
        };
        
        if (arr.length - count !== arr.length) {
            arr.unshift('X');
            arr.pop();
        }
    }

    return {board, smallShip, smallArr, placeShip, receiveAttack, gameover, placeDmg}
}

module.exports = Gameboard;