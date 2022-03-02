<?php
// Инициируем сессию
session_start();
// Помещаем значение в сессию
$_SESSION['username'] = "test";
$_SESSION['password'] = "pass";
// Выводим ссылку на другую страницу
echo "<a href='session2.php'>Другая страница</a>";
?>