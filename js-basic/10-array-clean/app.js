/*
Напишите функцию, которая принимает:
- Массив чисел
- Функцию удаления элементов

И возвращает отфильтрованный массив. 
При это функция удаления элементов принимает число и 
возвращает true, если его надо удалить 
и false, если надо оставить.
*/

const numbers = [8, -5, 2, 6, 3];

function checkNum (num) {
    return num % 2 === 0;
}

function filterArray (arr, fn) {
    const res = [];
    for (num of arr) {
        if (fn(num) === false) {
            res.push(num);
        }
    }
    return res;
}

console.log(filterArray(numbers, checkNum));
