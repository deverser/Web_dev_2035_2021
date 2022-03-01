<?php
// Данная функция рассчитывает факториал числа n
$n = 3;

function secret($n) {
    if ($n > 0) 
        return $n * secret($n-1);
    return 1;
}

$result = secret($n);
echo $result;

?>