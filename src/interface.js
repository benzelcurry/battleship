// Draws gameboards and provides user interface interaction

import placementHelper from './placementHelper';

export default function drawBoard(gameboard, playerBoard, playerStatus) {
    // MAKE IT SO USER CAN PLACE SHIPS; COMPUTER SHIPS RANDOMIZED
    gameboard.placeShip(23, gameboard.smallShip);
    gameboard.placeShip(41, gameboard.medShip);
    gameboard.placeShip(53, gameboard.bigShip);
    gameboard.placeShip(90, gameboard.hugeShip);

    let xtraPlaced = false;
    let smallPlaced = false;
    let medPlaced = false;
    let bigPlaced = false;
    let hugePlaced = false;

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

        // Fix so that it shows red at the end of every row if can't place
        square.addEventListener('mouseover', () => {
            placementHelper(xtraPlaced, smallPlaced, medPlaced, bigPlaced, hugePlaced, square);
        });

        square.addEventListener('mouseleave', () => {
            if (!hugePlaced) {
                square.style.backgroundColor = 'white';
                square.nextElementSibling.style.backgroundColor = 'white';
                square.nextElementSibling.nextElementSibling.style.backgroundColor = 'white';
                square.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'white';
                square.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'white';
                square.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'white';
            } else {
                square.style.backgroundColor = 'white';
            }
        });

        // Places ships, then executes attack on grid square clicked
        square.addEventListener('click', () => {
            // 1. Do following tasks in order
            // IMPLEMENT GRID SQUARE HIGHLIGHTS TO SHOW WHERE SHIPS WILL BE PLACED
            // ALLOW USER TO SWITCH SHIP ORIENTATION TO VERTICAL INSTEAD OF HORIZONTAL (add button to display)
            // CURRENTLY DOESN'T PLACE SHIPS IF TOO CLOSE TO EDGE, BUT STIL PROGRESSES WITH LOOP
            // IMPLEMENT SOME WAY OF SHOWING USER WHERE THEIR SHIPS ARE, BUT NOT ENEMY SHIPS (do after turns implemented)
            if (!xtraPlaced) {
                gameboard.placeShip(Number(square.id), gameboard.xtraSmallShip);
                xtraPlaced = true;
            } else if (!smallPlaced) {
                gameboard.placeShip(Number(square.id), gameboard.smallShip);
                smallPlaced = true;
            } else if (!medPlaced) {
                gameboard.placeShip(Number(square.id), gameboard.medShip);
                medPlaced = true;
            } else if (!bigPlaced) {
                gameboard.placeShip(Number(square.id), gameboard.bigShip);
                bigPlaced = true;
            } else if (!hugePlaced) {
                gameboard.placeShip(Number(square.id), gameboard.hugeShip);
                square.style.backgroundColor = 'white';
                square.nextElementSibling.style.backgroundColor = 'white';
                square.nextElementSibling.nextElementSibling.style.backgroundColor = 'white';
                square.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'white';
                square.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'white';
                square.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'white';
                hugePlaced = true;
            } else {
            // 2. Once all ships been placed, start checking for hits

                if (beenHit === false) {
                    beenHit = true;
                    console.log(gameboard.xtraSmallShip.index);
                    
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
            };
        });
    };
};

// module.exports = drawBoard;