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

    const placeShip = (index, ship, siblings, isVertical, computer) => {
        // Checks to see if ship will fit horizontally from left to right
        let stringIndex = String(index).split('')
        let firstNumIndex = stringIndex[0];
        let nextLine = String(index + ship.size - 1).split('');
        let secondNumIndex = nextLine[0];
        let letter;

        // Determines if there's a ship placed in the designated spot
        const isShipHere = () => {
            let canPlace = true;

            if (!isVertical) {
                for (let i = index; i < (index + siblings); i++) {
                    if (board[i] !== ' ') {
                        return canPlace = false;
                    } else {
                        canPlace = true;
                    }
                }
            // NEW CHUNK, CHECKS FOR VERTICALITY, FIX IF BROKEN
            } else {
                for (let i = index; i > index - (siblings * 10); i -=10) {
                    if (board[i] !== ' ') {
                        return canPlace = false;
                    } else {
                        canPlace = true;
                    }
                }
            }

            return canPlace;
        }

        // Assigns a letter to map the grid square to the ship object on it
        // The placementHelper() used is unrelated to the placementHelper.js 
        // module; unfortunate naming convention that will be fixed if time
        // is found
        if (!isVertical) {
            if (index + ship.size <= 10) {
                if (isShipHere() === false || computer) {
                    return 'Error';
                } else {
                    letter = placementHelper(ship.size);
                }
            } else {
                if (firstNumIndex !== secondNumIndex || isShipHere() === false || computer === true) {
                    return 'Error';
                } else {
                    letter = placementHelper(ship.size);
                };
            };
        } else {
            if (index < 10 || computer) {
                return 'Error';
            } else {
                if (index - ((ship.size - 1) * 10) < 0 || isShipHere() === false) {
                    return 'Error';
                } else {
                    letter = placementHelper(ship.size);
                };
            }
        };

        // Marks where ships are located on the board
        if (!isVertical) {
            for (let i = 0; i < ship.size; i++) {
                board[index + i] = ship.index[i] + letter;
            };
        } else {
            for (let i = 0; i < (ship.size * 10); i += 10) {
                board[index - i] = ship.index[i] + letter;
            };
        };
        
    };

    const receiveAttack = (index) => {
        if (board[index] === ' ') {
            board[index] = 'M'
            return 'miss';
        } else if (board[index] === 'M') {
            return 'already hit';
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

            board[index] = 'X';
            return 'hit';
        }
    };

    // Returns true if no ships are left on board; otherwise, false
    const gameover = () => {
        return (!board.includes('Ox') &&
                !board.includes('Os') &&
                !board.includes('Om') &&
                !board.includes('Ol') &&
                !board.includes('Oh'));
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