// Draws gameboards and provides user interface interaction

import placementHelper from './placementHelper';

export default function drawBoard(gameboard, playerBoard, playerStatus, computer, player2Container) {
    // MAKE IT SO USER CAN PLACE SHIPS; COMPUTER SHIPS RANDOMIZED

    // MAKE IT SO ONCE ALL USER SHIPS PLACED, CAN ATTACK ENEMY BOARD; GOOD SPOT TO IMPLEMENT TURNS
    let xtraPlaced = false;
    let smallPlaced = false;
    let medPlaced = false;
    let bigPlaced = false;
    let hugePlaced = false;

   
    if (computer === true) {
        gameboard.placeShip(3, gameboard.xtraSmallShip, 2, false);
        gameboard.placeShip(13, gameboard.smallShip, 3, false);
        gameboard.placeShip(23, gameboard.medShip, 4, false);
        gameboard.placeShip(33, gameboard.bigShip, 5, false);
        gameboard.placeShip(41, gameboard.hugeShip, 6, false);
        xtraPlaced = true;
        smallPlaced = true;
        medPlaced = true;
        bigPlaced = true;
        hugePlaced = true;
    };


    const horizontal = document.querySelector('.horizontal');
    const vertical = document.querySelector('.vertical');
    let isHorizontal = true;
    let isVertical = false;

    horizontal.addEventListener('click', () => {
        if (isHorizontal === true) {
            return;
        } else {
            isHorizontal = true;
            isVertical = false;
        };
    });

    vertical.addEventListener('click', () => {
        if (isVertical === true) {
            return;
        } else {
            isVertical = true;
            isHorizontal = false;
        };
    });

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

        square.addEventListener('mouseover', () => {
            placementHelper(xtraPlaced, smallPlaced, medPlaced, bigPlaced, hugePlaced, square, computer, isVertical);
        });

        square.addEventListener('mouseleave', () => {
            if (!hugePlaced) {
                if (!isVertical) {
                    for (let i = Number(square.id); i < (Number(square.id) + 6); i++) {
                        let thisSquare = document.getElementById(i);
                        thisSquare.style.backgroundColor = 'white';
                    }
                } else {
                    for (let i = Number(square.id); i > (Number(square.id) - (6 * 10)); i -= 10) {
                        let thisSquare = document.getElementById(i);
                        thisSquare.style.backgroundColor = 'white';
                    }
                }
            } else {
                square.style.backgroundColor = 'white';
            }
        });

        // Places ships, then executes attack on grid square clicked
        square.addEventListener('click', () => {
            let siblings;
            console.log({xtraPlaced, smallPlaced, medPlaced, bigPlaced, hugePlaced});

            const markSquares = (sqSize) => {
                if (isVertical === false) {
                    for (let i = Number(square.id); i < (Number(square.id) + siblings); i++) {
                        let thisSquare = document.getElementById(String(i));
                        thisSquare.textContent = sqSize;
                    };
                } else {
                    for (let i = Number(square.id); i > (Number(square.id) - (siblings * 10)); i -= 10) {
                        let thisSquare = document.getElementById(String(i));
                        thisSquare.textContent = sqSize;
                    };
                };
            };

            if (!xtraPlaced) {
                siblings = 2;
                if (gameboard.placeShip(Number(square.id), gameboard.xtraSmallShip, siblings, isVertical, computer) === 'Error') {
                    alert('You can\'t place a ship here');
                } else {
                    gameboard.placeShip(Number(square.id), gameboard.xtraSmallShip, siblings, isVertical);
                    markSquares('XS');
                    xtraPlaced = true;
                }
            } else if (!smallPlaced) {
                siblings = 3;
                if (gameboard.placeShip(Number(square.id), gameboard.smallShip, siblings, isVertical, computer) === 'Error') {
                    alert('You can\'t place a ship here');
                } else {
                    gameboard.placeShip(Number(square.id), gameboard.smallShip, siblings, isVertical);
                    markSquares('S');
                    smallPlaced = true;
                }
            } else if (!medPlaced) {
                siblings = 4;
                if (gameboard.placeShip(Number(square.id), gameboard.medShip, siblings, isVertical, computer) === 'Error') {
                    alert('You can\'t place a ship here');
                } else {
                    gameboard.placeShip(Number(square.id), gameboard.medShip, siblings, isVertical);
                    markSquares('M');
                    medPlaced = true;
                }
            } else if (!bigPlaced) {
                siblings = 5;
                if (gameboard.placeShip(Number(square.id), gameboard.bigShip, siblings, isVertical, computer) === 'Error') {
                    alert('You can\'t place a ship here');
                } else {
                    gameboard.placeShip(Number(square.id), gameboard.bigShip, siblings, isVertical);
                    markSquares('B');
                    bigPlaced = true;
                }
            } else if (!hugePlaced) {
                siblings = 6;
                if (gameboard.placeShip(Number(square.id), gameboard.hugeShip, siblings, isVertical, computer) === 'Error') {
                    alert('You can\'t place a ship here');
                } else {
                    gameboard.placeShip(Number(square.id), gameboard.hugeShip, siblings, isVertical);
                    markSquares('H');
                    hugePlaced = true;
                    player2Container.style.display = 'flex';
                    if (!isVertical) {
                        for (let i = Number(square.id); i < (Number(square.id) + 6); i++) {
                            let thisSquare = document.getElementById(i);
                            thisSquare.style.backgroundColor = 'white';
                        }
                    } else {
                        for (let i = Number(square.id); i > (Number(square.id) - (6 * 10)); i -= 10) {
                            let thisSquare = document.getElementById(i);
                            thisSquare.style.backgroundColor = 'white';
                        }
                    }
                }
            } else {
            // 2. Once all ships been placed, start checking for hits
                if (beenHit === false) {
                    beenHit = true;
                    
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