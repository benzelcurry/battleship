// Creates a new ship with specified length

const Ship = (length) => {
    let index = [];
    let size = length;

    for (let i = 0; i < length; i++) {
        index.push('O');
    }

    const hit = (num) => {
        index[num] = 'X';
    }

    const isSunk = () => {
        // return (!index.includes('O'));
        return (index.includes('X'));
    }

    return {index, size, hit, isSunk};
}

module.exports = Ship;