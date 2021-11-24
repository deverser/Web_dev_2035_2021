let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 0];

let getEvent = (arr) => {
    let evenArr = [];
    arr.forEach(item => {
        if(item % 2 == 0) {
            evenArr.push(item);
        }
    });
    return evenArr;
};

let newArr = getEvent(myArr);
console.log(newArr);