"use strict";

function getDateProperties(milliseconds) {
    let date = new Date(milliseconds);
    let result = {};

    result.day = date.getDate();
    result.month = date.getMonth()+1;
    result.year = date.getFullYear();
    result.hour = date.getHours();
    result.minutes = date.getMinutes();
    result.seconds = date.getSeconds();

    return result;
}

function getNameOfMonth(month) {
    switch(month) {
        case 1:
            return "Январь";
        case 2:
            return "Февраль";
        case 3:
            return "Март";
        case 4:
            return "Апрель";
        case 5:
            return "Май";
        case 6:
            return "Июнь";
        case 7:
            return "Июль";
        case 8:
            return "Август";
        case 9:
            return "Сентябрь";
        case 10:
            return "Октябрь";
        case 11:
            return "Ноябрь";
        case 12:
            return "Декабрь";
    }
}

function printPrettyDate(neededDate) {
    let date = getDateProperties(neededDate);
    let str = '';
    str = `${date.day} ${getNameOfMonth(date.month)} ${date.year}, `;
    str = str + `${date.hour}:${date.minutes}:${date.seconds}`;
    return str;
}

console.log(getDateProperties(1628440235430));
console.log(printPrettyDate(1628440235430));
console.log(printPrettyDate(214355323434));