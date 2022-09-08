// Helper module for hovering/unhovering grid while placing ships to
// avoid cluttering interface.js
// *** INCREDIBLY UGLY, COULD FIX THIS WITH RECURSION ***
// Could fix so it doesn't log errors in console when hovering an
// unplaceable spot, but not a priority.

const placementHelper = (xtra, small, med, big, huge, square) => {
    if (!xtra) {
        if (Number(square.id) + 2 > 100) {
            square.style.backgroundColor = 'red';
            square.nextElementSibling.style.backgroundColor = 'red';
        } else {
            square.style.backgroundColor = 'lightgreen';
            square.nextElementSibling.style.backgroundColor = 'lightgreen';
        }
    } else if (!small) {
        if (Number(square.id) + 3 > 100) {
            square.style.backgroundColor = 'red';
            square.nextElementSibling.style.backgroundColor = 'red';
            square.nextElementSibling.nextElementSibling.style.backgroundColor = 'red';
        } else {
            square.style.backgroundColor = 'lightgreen';
            square.nextElementSibling.style.backgroundColor = 'lightgreen';
            square.nextElementSibling.nextElementSibling.style.backgroundColor = 'lightgreen';
        }
    } else if (!med) {
        if (Number(square.id) + 4 > 100) {
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
    } else if (!big) {
        if (Number(square.id) + 5 > 100) {
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
    } else if (!huge) {
        if (Number(square.id) + 6 > 100) {
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
    } else { 
        square.style.backgroundColor = 'grey';
    };
};

module.exports = placementHelper;