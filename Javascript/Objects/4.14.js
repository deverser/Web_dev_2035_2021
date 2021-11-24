let eMailAddress = 'stanislav_sivin@mail.ru';

let getSubstring = (str, start, end) => {
    let newStr = '';
    for(let i = start; i < end; i++) {
        newStr = newStr + str.charAt(i);
    }
    return newStr;
};

let result = getSubstring(eMailAddress, eMailAddress.indexOf('@')+1, eMailAddress.length);
console.log(result);