// Tests the player.js module

const Player = require('../src/player');

test('returns playerName according to input', () => {
    const newPlayer = Player('guts');
    expect(newPlayer.playerName).toBe('guts');
});

test('isComputer() returns true if playerName is COM', () => {
    const comPlayer = Player('COM');
    expect(comPlayer.isComputer()).toBe(true);
});

test('isWinner set to false by default', () => {
    const newPlayer = Player('puck');
    expect(newPlayer.isWinner).toBe(false);
});