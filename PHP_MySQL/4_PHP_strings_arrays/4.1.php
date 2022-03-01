<?php

$a = "теперь пора всем хорошим людям прийти на помощь стране";
$words = explode(" ", $a);
echo $words[0].' '.$words[1].' '.$words[2].' '.$words[3].' '.$words[4].' '.$words[5].' '.$words[6].' '.$words[7].' '.$words[8];
echo '<br>';
echo $words[1].' '.$words[0].' '.$words[8].' '.$words[5].' '.$words[6].' '.$words[7].' '.$words[2].' '.$words[3].' '.$words[4];

?>