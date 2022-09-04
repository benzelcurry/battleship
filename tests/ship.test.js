// Tests the ship.js module

const Ship = require('../src/ship');
const smallShip = Ship(3);
const smallShip2 = Ship(3);

test('ship index matches length provided', () => {
    expect(smallShip.index).toStrictEqual(['O', 'O', 'O']);
});

test('hit() method changes specified ship index from O to X', () => {
    smallShip.hit(1);
    expect(smallShip.index).toStrictEqual(['O', 'X', 'O']);
});

test('isSunk() returns true after all spots have been hit', () => {
    smallShip.hit(0);
    smallShip.hit(1);
    smallShip.hit(2);
    expect(smallShip.isSunk()).toBe(true);
});

test('isSunk() returns false if any spot hasn\'t been hit', () => {
    smallShip2.hit(0);
    smallShip2.hit(1);
    expect(smallShip2.isSunk()).toBe(false);
});