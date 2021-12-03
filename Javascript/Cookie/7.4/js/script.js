"use strict";
// Вывод информации из кук
function getCookies() {
    let tmp = ''; // Переменная для построения строчного шаблона вывода
    // Проверяем наличие куки login
    if (typeof Cookies.get('login') !== undefined) {
        tmp = tmp + 'login : ' + Cookies.get('login') + '<br>';
    }

    // Проверяем наличие куки password
    if (typeof Cookies.get('password') !== undefined) {
        tmp = tmp + 'password : ' + Cookies.get('password');
    }
    // Присвоение строки параграфу с классом .saveCookie
    document.getElementsByClassName('saveCookie')[0].innerHTML = tmp;
}

let login = async () => {
    // Получаем с полей ввода логин и пароль
    let username = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    // Сохраняем в куки полученные логин и пароль
    Cookies.set('login', username);
    Cookies.set('password', password);

    // Выводим на параграф p.saveCookies строку с сохраненными куками
    await getCookies();
};