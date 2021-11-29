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

console.log(getDateProperties(214355323434));