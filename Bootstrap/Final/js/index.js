"use strict";

var myCollapsible = document.getElementById('accordionQues');
console.log(myCollapsible);
myCollapsible.addEventListener('hidden.bs.collapse', function (e) {
    console.log(e);
});

myCollapsible.addEventListener('shown.bs.collapse', function (e) {
    console.log(e);
});

function change(e) {
    console.log(e.target.parentNode);
}