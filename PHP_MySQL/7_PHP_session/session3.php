<?php
session_start();
// Разрегистрировали переменную
unset($_SESSION['username']);
unset($_SESSION['password']);
// Разрушаем сессию
session_destroy();
?>