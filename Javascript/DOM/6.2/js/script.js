'use strict';

function getForm() {
    let output = {};
    let polInputs = document.getElementsByName('pol');
    polInputs.forEach((pol) => {
        if (pol.checked == true) {
            output[pol.value] = { status : 'checked' };
        } else {
            output[pol.value] = { status : 'false' };
        }
    });
    return output;
}

console.log(getForm());