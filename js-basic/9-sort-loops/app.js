/*
Дан массив чисел: arr = [1, 40, -5, 10, 0]

Написать функцию, которая сортирует данный массив при помощи циклов.

Подсказка:

- Нужно использовать 2 цикла, вложенных друг в друга
- Нужно сравнивать и менять элементы
*/

const arr = [1, 40, -5, 10, 0];

function SortArray (numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
            }
        }
    }
    return numbers;
}

console.log(SortArray(arr));

