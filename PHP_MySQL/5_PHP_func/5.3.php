<?php

function changeVar($var) {
    $var = "Hello world";
    return $var;
}

$var = 5;
echo $var;
echo '<br>';
$var = changeVar($var);
echo $var;

?>