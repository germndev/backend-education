/*
Дан массива строк  [‘10-02-2022’, ‘тест’, ‘11/12/2023’, ‘00/13/2022’, ‘41/12/2023’];

Необходимо написать функцию, которая бы удаляла бы из массива все строки, 
которые нельзя перевести в дату (можно: 10-02-2022 и 11/12/2023) и 
возвращала новый массив вида:

- [‘10-02-2022’, ‘12-11-2023’]
*/

const dateArray = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function filterArr(arr) {
    const res = arr
        .filter(arrEl => arrEl.includes('-') || arrEl.includes('/'))
        .map(arrEl => {
            if (arrEl.includes('-')) return arrEl.split('-');
            if (arrEl.includes('/')) {   
                const enFormat = arrEl.split('/');            
                [enFormat[0], enFormat[1]] = [enFormat[1], enFormat[0]];
                return enFormat;
            }
    });
    return res;
}

function dateParse(arr) {
    const dateArr = filterArr(arr);
    const parseArr = dateArr
        .filter(arrEl => arrEl.length === 3 
            && (Number(arrEl[0]) <= 31 && arrEl[0].length === 2 && arrEl[0] !== '00')
            && (Number(arrEl[1]) <= 31 && arrEl[1].length === 2 && arrEl[1] !== '00')
            && (Number(arrEl[2]) <= 2100 && arrEl[2].length === 4)
        ).map(arrEl => arrEl.join('-'));
    return parseArr;

    
}

console.log(dateParse(dateArray));