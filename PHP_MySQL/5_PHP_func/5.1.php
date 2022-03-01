<?php
/* Данная функция не будет выполняться, так как попытка вызвать функцию bar происходит до выполнения функции foo в теле которой она объявлена */
/*function foo() {
    function bar() {
        echo "Hello world";
    }
} bar(); */

function foo() {
    function bar() {
        echo "Hello world";
    }
}

foo();
bar();
?>