// Tests the gameboard.js module

const Gameboard = require('../src/gameboard');

test('places a ship with length of 3 at given index', () => {
    let arr = [];
    const game = Gameboard();
    game.placeShip(13, 3);
    for (let i = 0; i < game.board.length; i++) {
        if (game.board[i] === 'H') {
            arr.push(i);
        };
    };

    expect(arr).toStrictEqual([13, 14, 15]);
});

test('doesn\'t place ship horizontally if no room', () => {
    const game = Gameboard();
    expect(game.placeShip(17, 3)).toBe('Error');
});

test('records hit if a ship is struck', () => {
    const game = Gameboard();
    game.placeShip(21, 5);
    game.receiveAttack(23);

    expect(game.board.at(23)).toBe('X');
});

test('gameover() returns true if no ships on board', () => {
    const game = Gameboard();

    expect(game.gameover()).toBe(true);
});

test('gameover() returns true if all ships destroyed', () => {
    const game = Gameboard();
    game.placeShip(13, 3);
    game.receiveAttack(13);
    game.receiveAttack(14);
    game.receiveAttack(15);

    expect(game.gameover()).toBe(true);
});

test('gameover() returns false if part of a ship remains', () => {
    const game = Gameboard();
    game.placeShip(13, 3);
    game.receiveAttack(13);
    game.receiveAttack(15);

    expect(game.gameover()).toBe(false);
});