// Creates players for the game

const Player = (name) => {
    const playerName = name;
    let isWinner = false;

    const isComputer = () => {
        return (playerName === 'COM');
    };

    return {playerName, isWinner, isComputer};
}

module.exports = Player;