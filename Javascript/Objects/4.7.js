'use strict';

let city = {};
city['name'] = 'ГородN';
city['population'] = '10 млн';
city['getName'] = function () { return this.name; };
console.log(city['getName']());