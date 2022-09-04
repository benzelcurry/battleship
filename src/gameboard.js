// Creates and manages the gameboard
// Key: {
//     H = (Ship) Here
//     M = Miss 
//     X = Hit 
// }

const Gameboard = () => {
    let board = [];
    for (let i = 0; i < 100; i++) {
        board.push(' ');
    };

    // Will need to rewrite this to use ships from ship.js
    const placeShip = (index, length) => {
        // Checks to see if ship will fit horizontally from left to right
        let stringIndex = String(index).split('')
        let firstNumIndex = stringIndex[0];
        let nextLine = String(index + length).split('');
        let secondNumIndex = nextLine[0];

        if (firstNumIndex !== secondNumIndex) {
            return 'Error';
        } else {
            for (let i = 0; i < length; i++) {
                board[index + i] = 'H';
            };
        };
    };

    // Will need to rewrite this to use ships from ship.js
    const receiveAttack = (index) => {
        if (board[index] === ' ') {
            board[index] = 'M'
        } else {
            board[index] = 'X'
        };
    };

    const gameover = () => {
        return (!board.includes('H'));
    };

    return {board, placeShip, receiveAttack, gameover}
}

module.exports = Gameboard;