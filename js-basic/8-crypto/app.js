/*
Написать 2 функции:

шифратор пароля - функция принимает пароль, 
разбивает по символам, меняет местами какие-то буквы по заданному 
алгоритму и возвращает строку.

проверка пароля - принимает зашифрованный пароль и второй пароль. 
Воспроизводит алгоритм назад на зашифрованном пароле и 
возвращает true, если он совпадает со втором паролем и false, если нет.

crypto(‘password’) -> ssapdorw
check(‘ssapdorw’, ‘password’) -> true
check(‘ssapdorw’, ‘wrong’) -> false
*/


function crypto(pass) {
    const passArr = pass.split('');
    const firstPart = passArr.splice(passArr.length / 2);
    passArr.reverse();
    firstPart.reverse();
    [firstPart[1], firstPart[2]] = [firstPart[2], firstPart[1]];
    return passArr.concat(firstPart).join('');
}


function check(writedPass, pass) {
    if (writedPass === crypto(pass)) {
        return true;
    }
    return false;
}
console.log(crypto('password'));
console.log(check('ssapdorw', 'password'));
console.log(check('ssapdorw', 'wrong'));