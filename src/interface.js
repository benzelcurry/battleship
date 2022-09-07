// Draws gameboards and provides user interface interaction

const drawBoard = (gameboard, playerBoard, playerStatus) => {
    // MAKE IT SO USER CAN PLACE SHIPS; COMPUTER SHIPS RANDOMIZED
    gameboard.placeShip(7, gameboard.xtraSmallShip);
    gameboard.placeShip(23, gameboard.smallShip);
    gameboard.placeShip(41, gameboard.medShip);
    gameboard.placeShip(53, gameboard.bigShip);
    gameboard.placeShip(90, gameboard.hugeShip);

    const xtraSmallSunk = document.createElement('div');
    xtraSmallSunk.classList.add('sunk');
    xtraSmallSunk.textContent = 'Extra small ship sunk';

    const smallSunk = document.createElement('div');
    smallSunk.classList.add('sunk');
    smallSunk.textContent = 'Small ship sunk';

    const medSunk = document.createElement('div');
    medSunk.classList.add('sunk');
    medSunk.textContent = 'Medium ship sunk';

    const bigSunk = document.createElement('div');
    bigSunk.classList.add('sunk');
    bigSunk.textContent = 'Big Ship sunk';

    const hugeSunk = document.createElement('div');
    hugeSunk.classList.add('sunk');
    hugeSunk.textContent = 'Huge ship sunk';

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
            if (!gameboard.xtraSmallShip.index.includes('O')) {
                playerStatus.appendChild(xtraSmallSunk);
            };
            
            if (!gameboard.smallShip.index.includes('O')) {
                playerStatus.appendChild(smallSunk);
            };

            if (!gameboard.medShip.index.includes('O')) {
                playerStatus.appendChild(medSunk);
            };

            if (!gameboard.bigShip.index.includes('O')) {
                playerStatus.appendChild(bigSunk);
            };

            if (!gameboard.hugeShip.index.includes('O')) {
                playerStatus.appendChild(hugeSunk);
            };
        });
    };
};

module.exports = drawBoard;