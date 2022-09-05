// Draws gameboards and provides user interface interaction

const drawBoard = (gameboard, playerBoard) => {
    gameboard.placeShip(7, gameboard.xtraSmallShip);
    gameboard.placeShip(23, gameboard.smallShip);
    gameboard.placeShip(41, gameboard.medShip);
    gameboard.placeShip(53, gameboard.bigShip);
    gameboard.placeShip(90, gameboard.hugeShip);

    for (let i = 0; i < gameboard.board.length; i++) {
        const square = document.createElement('div');
        square.id = i; 
        square.classList.add('square');
        playerBoard.appendChild(square);

        // Executes attack on grid square clicked
        square.addEventListener('click', () => {
            console.log(gameboard.board[square.id]);
            gameboard.receiveAttack(square.id);
            if (gameboard.board[square.id] === 'X') {
                square.textContent = 'O';
                square.style.color = 'green';
            } else {
                square.textContent = 'X';
                square.style.color = 'red';
            };
        })
    }
}

module.exports = drawBoard;