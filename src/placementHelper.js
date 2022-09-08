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

    if (!xtra) {
        let firstRow = false;
        shipSize = 2;
        nextLine = String(Number(square.id) + shipSize - 1).split('');
        secondNumIndex = (nextLine[0]);
        if (Number(square.id) + shipSize <= 10) {
            square.style.backgroundColor = 'lightgreen';
            square.nextElementSibling.style.backgroundColor = 'lightgreen';
        } else {
            if (Number(square.id) + 2 > 100 || firstNumIndex !== secondNumIndex) {
                square.style.backgroundColor = 'red';
                square.nextElementSibling.style.backgroundColor = 'red';
            } else {
                square.style.backgroundColor = 'lightgreen';
                square.nextElementSibling.style.backgroundColor = 'lightgreen';
            }
        }
    } else if (!small) {
        shipSize = 3;
        nextLine = String(Number(square.id) + shipSize - 1).split('');
        secondNumIndex = (nextLine[0]);
        if (Number(square.id) + shipSize <= 10) {
            square.style.backgroundColor = 'lightgreen';
            square.nextElementSibling.style.backgroundColor = 'lightgreen';
            square.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
        } else {
            if (Number(square.id) + 3 > 100 || (firstNumIndex !== secondNumIndex)) {
                square.style.backgroundColor = 'red';
                square.nextElementSibling.style.backgroundColor = 'red';
                square.nextElementSibling.nextElementSibling.style.backgroundColor = 'red';
            } else {
                square.style.backgroundColor = 'lightgreen';
                square.nextElementSibling.style.backgroundColor = 'lightgreen';
                square.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
            }
        }
    } else if (!med) {
        shipSize = 4;
        nextLine = String(Number(square.id) + shipSize - 1).split('');
        secondNumIndex = (nextLine[0]);
        if (Number(square.id) + shipSize <= 10) {
            square.style.backgroundColor = 'lightgreen';
            square.nextElementSibling.style.backgroundColor = 'lightgreen';
            square.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
            square.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
        } else {
            if (Number(square.id) + 4 > 100 || firstNumIndex !== secondNumIndex) {
                square.style.backgroundColor = 'red';
                square.nextElementSibling.style.backgroundColor = 'red';
                square.nextElementSibling.nextElementSibling.style.backgroundColor = 'red';
                square.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'red';
            } else {
                square.style.backgroundColor = 'lightgreen';
                square.nextElementSibling.style.backgroundColor = 'lightgreen';
                square.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
                square.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
            }
        }
    } else if (!big) {
        shipSize = 5;
        nextLine = String(Number(square.id) + shipSize - 1).split('');
        secondNumIndex = (nextLine[0]);
        if (Number(square.id) + shipSize <= 10) {
            square.style.backgroundColor = 'lightgreen';
            square.nextElementSibling.style.backgroundColor = 'lightgreen';
            square.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
            square.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
            square.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
        } else {
            if (Number(square.id) + 5 > 100 || firstNumIndex !== secondNumIndex) {
                square.style.backgroundColor = 'red';
                square.nextElementSibling.style.backgroundColor = 'red';
                square.nextElementSibling.nextElementSibling.style.backgroundColor = 'red';
                square.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'red';
                square.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'red';
            } else {
                square.style.backgroundColor = 'lightgreen';
                square.nextElementSibling.style.backgroundColor = 'lightgreen';
                square.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
                square.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
                square.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
            }
        }
    } else if (!huge) {
        shipSize = 6;
        nextLine = String(Number(square.id) + shipSize - 1).split('');
        secondNumIndex = (nextLine[0]);
        if (Number(square.id) + shipSize <= 10) {
            square.style.backgroundColor = 'lightgreen';
            square.nextElementSibling.style.backgroundColor = 'lightgreen';
            square.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
            square.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
            square.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
            square.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
        } else {
            if (Number(square.id) + 6 > 100 || firstNumIndex !== secondNumIndex) {
                square.style.backgroundColor = 'red';
                square.nextElementSibling.style.backgroundColor = 'red';
                square.nextElementSibling.nextElementSibling.style.backgroundColor = 'red';
                square.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'red';
                square.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'red';
                square.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'red';
            } else {
                square.style.backgroundColor = 'lightgreen';
                square.nextElementSibling.style.backgroundColor = 'lightgreen';
                square.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
                square.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
                square.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
                square.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
            }
        }
    } else { 
        square.style.backgroundColor = 'grey';
    };
};

module.exports = placementHelper;