const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (value) {
            display.value += value;
        }
    });
});

clearButton.addEventListener('click', () => {
    display.value = '';
});

equalsButton.addEventListener('click', () => {
    try {
        display.value = Function(`'use strict'; return (${display.value})`)();
    } catch (error) {
        display.value = 'Error';
    }
});
