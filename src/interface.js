// Draws gameboards and provides user interface interaction

const drawBoard = (gameboard, playerBoard) => {
    gameboard.placeShip(7, gameboard.xtraSmallShip);
    gameboard.placeShip(23, gameboard.smallShip);
    gameboard.placeShip(41, gameboard.medShip);
    gameboard.placeShip(53, gameboard.bigShip);
    gameboard.placeShip(90, gameboard.hugeShip);

    const player1 = document.querySelector('.player1');

    const smallSunk = document.createElement('div');
    smallSunk.classList.add('sunk');
    smallSunk.textContent = 'Small ship sunk';

    for (let i = 0; i < gameboard.board.length; i++) {
        const square = document.createElement('div');
        square.id = i; 
        square.classList.add('square');
        let beenHit = false;
        playerBoard.appendChild(square);

        // Executes attack on grid square clicked
        square.addEventListener('click', () => {
            if (beenHit === false) {
                beenHit = true;
                console.log(gameboard.smallShip.index);
                
                gameboard.receiveAttack(square.id);
                if (gameboard.board[square.id] === 'X') {
                    square.textContent = 'O';
                    square.style.color = 'green';
                } else {
                    square.textContent = 'X';
                    square.style.color = 'red';
                };
            } else {
                return;
            }
            
            // MAKE THIS WORK FOR ALL SHIPS AND BOTH BOARDS INDEPENDENTLY
            // Appends which ships have been sunken to the scoreboard
            if (!gameboard.smallShip.index.includes('O')) {
                player1.appendChild(smallSunk);
            };
        });
    };
};

module.exports = drawBoard;