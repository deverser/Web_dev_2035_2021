"use strict";

const roundedNumber = (num, count) => Math.round(num * 10**count)/(10**count);

console.log(roundedNumber(21.4509823871223213, 7));