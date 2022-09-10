// Helper module for hovering/unhovering grid while placing ships to
// avoid cluttering interface.js
// Could fix so it doesn't log errors in console when hovering an
// unplaceable spot, but not a priority.

const placementHelper = (xtra, small, med, big, huge, square, computer, isVertical) => {
    let stringIndex = (square.id).split('')
    let firstNumIndex = stringIndex[0];
    let shipSize;
    let nextLine;
    let secondNumIndex;

    // *edited to include hugePlaced
    const colorSquares = (color) => {
        if (computer) {
            return;
        } else {
            if (!isVertical) {
                for (let i = Number(square.id); i < (Number(square.id) + shipSize); i++) {
                    let thisSquare = document.getElementById(i);
                    thisSquare.style.backgroundColor = color;
                }
            } else {
                for (let i = Number(square.id); i > (Number(square.id) - (shipSize * 10)); i -= 10) {
                    let thisSquare = document.getElementById(i);
                    thisSquare.style.backgroundColor = color;
                }
            }
        }
    };

    const containsText = (x) => {
        let hasText;

        if (!isVertical) {
            for (let i = Number(square.id); i < Number(square.id) + x; i++) {
                let thisSquare = document.getElementById(i);
                if (!thisSquare.textContent) {
                    hasText = false;
                } else {
                    return hasText = true;
                }
            }

            return hasText;
        } else {
            for (let i = Number(square.id); i > Number(square.id) - (x * 10); i -= 10) {
                let thisSquare = document.getElementById(i);
                if (!thisSquare.textContent) {
                    hasText = false;
                } else {
                    return hasText = true;
                }
            }

            return hasText;
        }
    }

    const helper = (x) => {
        shipSize = x;
        nextLine = String(Number(square.id) + shipSize - 1).split('');
        secondNumIndex = (nextLine[0]);
        if (!isVertical) {
            if (Number(square.id) + shipSize <= 10) {
                colorSquares('lightgreen');
            } else {
                if (Number(square.id) + 2 > 100 || firstNumIndex !== secondNumIndex || containsText(x) === true) {
                    colorSquares('red');
                } else {
                    colorSquares('lightgreen');
                }
            }
        } else {
            if (x === 2) {
                if (Number(square.id) < 10 || containsText(x) === true) {
                    colorSquares('red');
                } else {
                    colorSquares('lightgreen');
                };
            } else {
                if (Number(square.id) - ((x - 1) * 10) < 0 || containsText(x) === true) {
                    colorSquares('red');
                } else {
                    colorSquares('lightgreen');
                };
            };
        };
    };

    if (!xtra) {
        helper(2);
    } else if (!small) {
        helper(3);
    } else if (!med) {
        helper(4);
    } else if (!big) {
        helper(5);
    } else if (!huge) {
        helper(6);
    } else { 
        square.style.backgroundColor = 'grey';
    };
};

module.exports = placementHelper;