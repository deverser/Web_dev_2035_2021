'use strict';

function getForm() {
    let result = {};
    result.name = document.getElementById('name').value;
    result.surname = document.getElementById('surname').value;
    result.age = document.getElementById('age').value;
    
    let sex = {};
    let index = 0;
    let radioInputs = document.getElementsByName('sex');
    radioInputs.forEach((input) =>{
        if(input.checked == true) {
            sex[index] = {};
            sex[index]['value'] = input.value;
            sex[index++]['status'] = 'checked';
        } else {
            sex[index] = {};
            sex[index]['value'] = input.value;
            sex[index++]['status'] = 'false';
        }
    });

    result.sex = sex;
    document.write(JSON.stringify(result));
    return result;
}