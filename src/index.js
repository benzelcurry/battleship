import './style.css';

const test = document.querySelector('.test');
test.textContent = 'Hello.'

// THIS ISN'T GOING TO WORK FOR TESTING; NEED TO SEPARATE FUNCTIONS FROM THE MAIN JS FILE
function sum(a, b) {
    return a + b;
}

module.exports = sum;