// Tests the gameboard.js module

const Gameboard = require('../src/gameboard');
const game = Gameboard();

test('places a ship with length of 3 at given index', () => {
    let arr = [];
    game.placeShip(13, 3);
    for (let i = 0; i < game.board.length; i++) {
        if (game.board[i] === 'H') {
            arr.push(i);
        };
    };

    expect(arr).toStrictEqual([13, 14, 15]);
});

test('doesn\'t place ship horizontally if no room', () => {
    expect(game.placeShip(17, 3)).toBe('Error');
});