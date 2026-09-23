/*
Написать функцию проверки номера карты алгоритмом Луна. 
В функцию передаётся карта: 4561-2612-1234-5464, 
а функция возвращает true, если карта проходит алгоритм 
и false, если нет.
*/

const card1 = '4561-2612-1234-5464';
const card2 = '4561-2612-1234-5467';

function testLuna (str) {
    const formatStr = str.replaceAll('-', '');

    if (isNaN(Number(formatStr))) {
        return undefined;
    }

    const numbers = formatStr.split('');
    let start = (numbers.length - 1) % 2 === 0 ? 1 : 0;

    for (let i = start; i < numbers.length; i += 2) {
        numbers[i] = numbers[i] * 2;
        if (numbers[i] > 9) {
            numbers[i] -= 9;
        }
    }

    const sum = numbers.reduce((acc, num) => acc + Number(num), 0);

    return sum % 10 === 0 ? true : false;
}

console.log(testLuna(card1));
console.log(testLuna(card2));