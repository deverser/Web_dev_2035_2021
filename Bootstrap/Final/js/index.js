"use strict";

var myCollapsible = document.getElementById('accordionQues');
myCollapsible.addEventListener('shown.bs.collapse', function (e) {
    let accElem = e.target.parentNode;
    accElem.querySelector('.accordion-button > .questions__item > i').classList.toggle("fa-caret-up");
    accElem.querySelector('.accordion-button > .questions__item > i').classList.toggle("fa-caret-down");
});

myCollapsible.addEventListener('hidden.bs.collapse', function (e) {
    let accElem = e.target.parentNode;
    accElem.querySelector('.accordion-button > .questions__item > i').classList.toggle("fa-caret-down");
    accElem.querySelector('.accordion-button > .questions__item > i').classList.toggle("fa-caret-up");
});