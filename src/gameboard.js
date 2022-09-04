// Creates and manages the gameboard

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
            }
        }
    }

    return {board, placeShip}
}

module.exports = Gameboard;