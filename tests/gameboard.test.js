// Tests the gameboard.js module

const Gameboard = require('../src/gameboard');
const Ship = require('../src/ship');

test('places a ship with length of 3 at given index', () => {
    let arr = [];
    const game = Gameboard();
    const smallShip = Ship(3);
    game.placeShip(13, smallShip);
    for (let i = 0; i < game.board.length; i++) {
        if (game.board[i].split('').includes('O')) {
            arr.push(i);
        };
    };

    expect(arr).toStrictEqual([13, 14, 15]);
});

test('doesn\'t place ship horizontally if no room', () => {
    const game = Gameboard();
    const smallShip = Ship(3);
    expect(game.placeShip(17, smallShip)).toBe('Error');
});

test('records hit if a ship is struck', () => {
    const game = Gameboard();
    const medShip = Ship(4);
    game.placeShip(21, medShip);
    game.receiveAttack(23);

    expect(game.board.at(23)).toBe('X');
});

test('gameover() returns true if no ships on board', () => {
    const game = Gameboard();

    expect(game.gameover()).toBe(true);
});

test('gameover() returns true if all ships destroyed', () => {
    const game = Gameboard();
    const smallShip = Ship(3);
    const medShip = Ship(4);
    game.placeShip(13, smallShip);
    game.placeShip(31, medShip);
    game.receiveAttack(13);
    game.receiveAttack(14);
    game.receiveAttack(15);
    game.receiveAttack(31);
    game.receiveAttack(32);
    game.receiveAttack(33);
    game.receiveAttack(34);

    expect(game.gameover()).toBe(true);
});

test('gameover() returns false if part of a ship remains', () => {
    const game = Gameboard();
    const smallShip = Ship(3);
    game.placeShip(13, smallShip);
    game.receiveAttack(13);
    game.receiveAttack(15);

    expect(game.gameover()).toBe(false);
});

test('placeShip() sends an instance of ship to index', () => {
    const game = Gameboard();
    game.placeShip(13, game.smallShip);

    expect(game.board.at(14)).toBe('Os');
});

test('makes sure smallArr is being pushed to', () => {
    const game = Gameboard();
    game.placeShip(13, game.smallShip);

    expect(game.smallArr).toStrictEqual(['O', 'O', 'O']);
});

test('gameDmg() functions pushes \'X\' to array and pops \'O\'', () => {
    const game = Gameboard();
    game.placeDmg(game.smallArr);

    expect(game.smallArr).toStrictEqual(['X', 'O', 'O']);
});

test('if hit, damage pushes from Gameboard() to Ship object', () => {
    const game = Gameboard();
    game.placeShip(13, game.smallShip);
    game.receiveAttack(13);

    expect(game.smallShip.index).toStrictEqual(['X', 'O', 'O']);
})