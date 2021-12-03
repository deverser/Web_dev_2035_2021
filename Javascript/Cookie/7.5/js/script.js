"use strict";

let login = () => {
    let username = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    if (username == 'stanislav' && password == 'pass') {
        Cookies.set('login', username);
        Cookies.set('password', password);
        // Хук, который позволяет изменить внешний вид страницы без перезагрузки
        checkStatus();
    } else {
        // Если произошла ошибка, добавляем сообщение об ошибке под форму в элемент .info
        document.getElementsByClassName('info')[0].innerHTML = '<strong>Неверный логин или пароль!</strong>';
    }
};

let logout = async () => {
    // Удаляем из куков login и password
    Cookies.remove('login');
    Cookies.remove('password');
    checkStatus();
};

let checkStatus = () => {
    // Получаем логин и пасс из куков
    let login = Cookies.get('login');
    let pass = Cookies.get('password');

    // Проверяем верность хранимых данных
    if (login == 'stanislav' && pass == 'pass') {
        // Если логин и пароль совпали, то показываем приветствие и скрываем форму авторизации
        document.getElementsByClassName('formAuth')[0].style.display = 'none';
        document.getElementsByClassName('greetings')[0].style.display = 'block';
        // а также добавляем текст к приветствию, т.е. кого приветствуем
        document.querySelector('.greetings p span').innerText = login;
    } else {
        // Если логин и пароль не совпали, то показываем форму авторизации и скрываем приветствие 
        document.getElementsByClassName('formAuth')[0].style.display = 'block';
        document.getElementsByClassName('greetings')[0].style.display = 'none';
    }
    // Удаляем данные с инпутов и сообщение об ошибке в .info
    document.getElementsByClassName('info')[0].innerHTML = '';
    document.getElementById('login').value = '';
    document.getElementById('password').value = '';
};