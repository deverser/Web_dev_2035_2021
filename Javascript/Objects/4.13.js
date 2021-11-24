let names = "Станислав, Нина, Илья, Николай, Ирина, Дмитрий, Алла";

let getSplitArr = (str, sign) => str.split(sign);

console.log(getSplitArr(names, ', '));
console.log(typeof getSplitArr(names, ', '));