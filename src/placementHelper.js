// Helper module for hovering/unhovering grid while placing ships to
// avoid cluttering interface.js
// *** INCREDIBLY UGLY, COULD FIX THIS WITH RECURSION ***
// Could fix so it doesn't log errors in console when hovering an
// unplaceable spot, but not a priority.

const placementHelper = (xtra, small, med, big, huge, square) => {
    let stringIndex = (square.id).split('')
    let firstNumIndex = stringIndex[0];
    let shipSize;
    let nextLine;
    let secondNumIndex;

    const colorSquares = (color) => {
        if (shipSize === 2) {
            square.style.backgroundColor = color;
            square.nextElementSibling.style.backgroundColor = color;
        } else if (shipSize === 3) {
            square.style.backgroundColor = color;
            square.nextElementSibling.style.backgroundColor = color;
            square.nextElementSibling.nextElementSibling.style.backgroundColor = color;
        } else if (shipSize === 4) {
            square.style.backgroundColor = color;
            square.nextElementSibling.style.backgroundColor = color;
            square.nextElementSibling.nextElementSibling.style.backgroundColor = color;
            square.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = color;
        } else if (shipSize === 5) {
            square.style.backgroundColor = color;
            square.nextElementSibling.style.backgroundColor = color;
            square.nextElementSibling.nextElementSibling.style.backgroundColor = color;
            square.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = color;
            square.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = color;
        } else if (shipSize === 6) {
            square.style.backgroundColor = color;
            square.nextElementSibling.style.backgroundColor = color;
            square.nextElementSibling.nextElementSibling.style.backgroundColor = color;
            square.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = color;
            square.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = color;
            square.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = color;
        };
    };

    if (!xtra) {
        shipSize = 2;
        nextLine = String(Number(square.id) + shipSize - 1).split('');
        secondNumIndex = (nextLine[0]);
        if (Number(square.id) + shipSize <= 10) {
            colorSquares('lightgreen');
        } else {
            console.log('no, here');
            if (Number(square.id) + 2 > 100 || firstNumIndex !== secondNumIndex) {
                colorSquares('red');
            } else {
                colorSquares('lightgreen');
            }
        }
    } else if (!small) {
        shipSize = 3;
        nextLine = String(Number(square.id) + shipSize - 1).split('');
        secondNumIndex = (nextLine[0]);
        if (Number(square.id) + shipSize <= 10) {
            colorSquares('lightgreen');
        } else {
            if (Number(square.id) + 3 > 100 || (firstNumIndex !== secondNumIndex)) {
                colorSquares('red');
            } else {
                colorSquares('lightgreen');
            }
        }
    } else if (!med) {
        shipSize = 4;
        nextLine = String(Number(square.id) + shipSize - 1).split('');
        secondNumIndex = (nextLine[0]);
        if (Number(square.id) + shipSize <= 10) {
            colorSquares('lightgreen');
        } else {
            if (Number(square.id) + 4 > 100 || firstNumIndex !== secondNumIndex) {
                colorSquares('red');
            } else {
                colorSquares('lightgreen');
            }
        }
    } else if (!big) {
        shipSize = 5;
        nextLine = String(Number(square.id) + shipSize - 1).split('');
        secondNumIndex = (nextLine[0]);
        if (Number(square.id) + shipSize <= 10) {
            colorSquares('lightgreen');
        } else {
            if (Number(square.id) + 5 > 100 || firstNumIndex !== secondNumIndex) {
                colorSquares('red');
            } else {
                colorSquares('lightgreen');
            }
        }
    } else if (!huge) {
        shipSize = 6;
        nextLine = String(Number(square.id) + shipSize - 1).split('');
        secondNumIndex = (nextLine[0]);
        if (Number(square.id) + shipSize <= 10) {
            colorSquares('lightgreen');
        } else {
            if (Number(square.id) + 6 > 100 || firstNumIndex !== secondNumIndex) {
                colorSquares('red');
            } else {
                colorSquares('lightgreen');
            }
        }
    } else { 
        square.style.backgroundColor = 'grey';
    };
};

module.exports = placementHelper;