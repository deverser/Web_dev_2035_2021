<?php
include ('hello.php');
require_once ('world.php');
require_once ('world.php');
require_once ('world.php');

// Выведет строку "world! Hello", так как файл world.php подключится только один раз
echo $h; 
?>