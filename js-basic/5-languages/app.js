/*
Написать код, который при передаче 
пользователем языка: en, ru, de выводит в консоль 
соответствующее приветствие на указанном языке.

Пример: de -> ‘Gutten tag!’
*/

const inputLang = prompt('Введите нужный язык (en, ru, de):');

switch (true) {
    case inputLang === 'de':
        console.log('Gutten tag!');
        break;
    case inputLang === 'ru':
        console.log('Добрый день!');
        break;
    case inputLang === 'en':
        console.log('Good afternoon!');
        break;
    default:
        console.log('Введено неверное значение!')
}