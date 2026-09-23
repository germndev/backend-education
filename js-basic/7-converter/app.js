/*
Написать функцию, которая получает на вход 3 параметра:

суммой средств - 1000
валютой средств - руб
целевой валютой - $

Возвращает число в новой валюте, если конвертация 
поддерживается, или null, если нет. Ставки конвертации 
хранятся внутри функции.
*/

function moneyConverter (sum, currency1, currency2) {
    const rate = 80;
    switch (true) {
        case currency1 === 'руб' && currency2 === '$':
            return sum / rate;
        case currency1 === '$' && currency2 === 'руб':
            return sum * rate;
        default:
            return null;
    }
}

console.log(moneyConverter(1000, 'руб', '$'));