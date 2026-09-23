/*
Написать код, рассчитывающий дистанцию о объекта: 

addressLat - адрес назначения lat (например: 10)
addressLong - адрес назначения long
positionLat - текущее положение пользователя lat
positionLong - текущее положение пользователя long

В результате на основе этих координат нужно посчитать расстояние 
от текущего месторасположения до назначения.

*/

const addressLat = 10, addressLong = 15;
const positionLat = 5, positionLong = 3;
const distance = Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);
console.log(`Расстояние от текущего месторасположения до назначения: ${distance}`);