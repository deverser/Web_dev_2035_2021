<?php

$president = "Путин";
$date = "366";

$presidentAnswer = $_POST['president'];
$dateAnswer = $_POST['date'];
echo '<h1>Ваши ответы следующие:</h1>';
echo '<br>';
echo "<p>Вопрос 1. Кто является президентом России?</p>";
echo '<br>';
echo 'Вы ответили - '.$presidentAnswer.', правильно - '.$president;
echo '<br>';
echo "<p>Вопрос 2. Сколько дней в високосном году?</p>";
echo '<br>';
echo 'Вы ответили - '.$dateAnswer.', правильно - '.$date;
?>