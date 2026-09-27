/* Написать функцию, которая принимает объект query параметров 
и возвращает строку для вставки: */

const example = {
    search: 'Вася',
    take: 10,
}

function queryParams(obj) {
    let params = [], str;
    for (const key of Object.keys(obj)) {
        str = `${key}=${obj[key]}`;
        params.push(str);
    }
    return params.join("&");
}

console.log(queryParams(example));

// search=Вася&take=10
