"use strict";

var myCollapsible = document.getElementById('accordionQues');
myCollapsible.addEventListener('shown.bs.collapse', function (e) {
    console.log('Открыт');
    console.log(e.target.parentNode);
});

myCollapsible.addEventListener('hidden.bs.collapse', function (e) {
    console.log('Закрыт');
    console.log(e.target.parentNode);
});

function change(e) {
    console.log(e);
}