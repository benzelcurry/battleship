// Draws gameboards and provides user interface interaction

const drawBoard = (gameboard, playerBoard) => {
    gameboard.placeShip(13, gameboard.smallShip);

    for (let i = 0; i < gameboard.board.length; i++) {
        const square = document.createElement('div');
        square.id = i; 
        square.classList.add('square');
        playerBoard.appendChild(square);

        // Executes attack on grid square clicked
        square.addEventListener('click', () => {
            console.log(square.id);
            gameboard.receiveAttack(square.id);
            if (gameboard.board[square.id] === 'X') {
                square.style.backgroundColor = 'red';
            };
        })
    }
}

module.exports = drawBoard;