document.querySelector('.plus').addEventListener('click', () => {
    document.querySelector('#operation').innerHTML = '+';
    const firstNumber = Number(document.querySelector('.firstNumber').value);
    const secondNumber = Number(document.querySelector('.secondNumber').value);
    document.querySelector('.result').textContent = firstNumber + secondNumber;
});

document.querySelector('.minus').addEventListener('click', () => {
    document.querySelector('#operation').innerHTML = '-';
    const firstNumber = Number(document.querySelector('.firstNumber').value);
    const secondNumber = Number(document.querySelector('.secondNumber').value);
    document.querySelector('.result').textContent = firstNumber - secondNumber;
});

document.querySelector('.multi').addEventListener('click', () => {
    document.querySelector('#operation').innerHTML = '*';
    const firstNumber = Number(document.querySelector('.firstNumber').value);
    const secondNumber = Number(document.querySelector('.secondNumber').value);
    document.querySelector('.result').textContent = firstNumber * secondNumber;
});

document.querySelector('.division').addEventListener('click', () => {
    document.querySelector('#operation').innerHTML = '/';
    const firstNumber = Number(document.querySelector('.firstNumber').value);
    const secondNumber = Number(document.querySelector('.secondNumber').value);
    document.querySelector('.result').textContent = firstNumber / secondNumber;
});
