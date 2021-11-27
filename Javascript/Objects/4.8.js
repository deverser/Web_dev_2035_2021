'use strict';

let city = {};
city['name'] = 'ГородN';
city['population'] = '10 млн';
city['getName'] = function () { return this.name; };
city['printProperties'] = function () {
    let tmp = '';
    for (let item in this) {
        if((typeof this[item]) !== 'function') {
            tmp = tmp + item + '=' + this[item] + '/';
        }
    }
    return tmp;
};
console.log(city['printProperties']());