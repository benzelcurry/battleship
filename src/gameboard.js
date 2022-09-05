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

    // Declares ships and their arrays
    const xtraSmallShip = Ship(2);
    const smallShip = Ship(3);
    const medShip = Ship(4);
    const bigShip = Ship(5);
    const hugeShip = Ship(6);
    let xtraSmallArr = ['O', 'O'];
    let smallArr = ['O', 'O', 'O'];
    let medArr = ['O', 'O', 'O', 'O'];
    let bigArr = ['O', 'O', 'O', 'O', 'O'];
    let hugeArr = ['O', 'O', 'O', 'O', 'O', 'O']; 

    const placeShip = (index, ship) => {
        // Checks to see if ship will fit horizontally from left to right
        let stringIndex = String(index).split('')
        let firstNumIndex = stringIndex[0];
        let nextLine = String(index + ship.size).split('');
        let secondNumIndex = nextLine[0];
        let letter;

        if (index + ship.size < 10) {
            letter = placementHelper(ship.size);
        } else {
            if (firstNumIndex !== secondNumIndex) {
                return 'Error';
            // Assigns a letter to map the grid square to the ship object on it
            } else {
                letter = placementHelper(ship.size);
            }
        };

        for (let i = 0; i < ship.size; i++) {
            board[index + i] = ship.index[i] + letter;
        };
    };

    // Will need to rewrite this to test for all ship sizes/arrays
    const receiveAttack = (index) => {
        if (board[index] === ' ') {
            board[index] = 'M'
        // NEED TO GET isSunk() RUNNING
        } else {
            if (board[index].split('').includes('x')) {
                attackHelper(xtraSmallArr, xtraSmallShip);
            } else if (board[index].split('').includes('s')) {
                attackHelper(smallArr, smallShip);
            } else if (board[index].split('').includes('m')) {
                attackHelper(medArr, medShip);
            } else if (board[index].split('').includes('l')) {
                attackHelper(bigArr, bigShip);
            } else if (board[index].split('').includes('h')) {
                attackHelper(hugeArr, hugeShip);
            };

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

    // Helper function for placeAttack()
    const placementHelper = (shipLength) => {
        let shipLetter;

        if (shipLength === 2) {
            shipLetter = 'x';
        } else if (shipLength === 3) {
            shipLetter = 's';
        } else if (shipLength === 4) {
            shipLetter = 'm';
        } else if (shipLength === 5) {
            shipLetter = 'l';
        } else if (shipLength === 6) {
            shipLetter = 'h';
        }

        return shipLetter;
    }

    // Helper function for receiveAttack()
    const attackHelper = (array, shipSize) => {
        placeDmg(array);
        shipSize.index = array;
        shipSize.isSunk();
    }

    return {board, xtraSmallShip, smallShip, medShip, bigShip, hugeShip, xtraSmallArr,
            smallArr, medArr, bigArr, hugeArr, placeShip, receiveAttack, gameover, 
            placeDmg}
}

module.exports = Gameboard;