<?php
// Подключаемся к нашей БД
$mysqli = mysqli_connect("localhost", "root","","NewDatabase");

// Если нет подключения - выдаем ошибку подключения
if($mysqli === false) {
    die("ERROR: Could not connect. ".mysqli_connect_error());
} else {
    // Если подключение успешно - извлекаем данные из нашей таблицы
    $res = $mysqli->query("SELECT * FROM zakaz;");

    echo "<table border=1>";
    echo "<tr><th>ID</th><th>NAME</th><th>SURNAME</th><th>Email</th><th>Tovar</th><th>Col</th></tr>";
    // Далее в цикле выводим построчно данные из таблицы на HTML-страницу
    for($row_no = 0; $row_no <= $res->num_rows - 1; $row_no++) {
        $res->data_seek($row_no);
        $row = $res->fetch_assoc();
        echo "<tr>
        <td>".$row['id_tovar']."</td>
        <td>".$row['name']."</td>
        <td>".$row['surname']."</td>
        <td>".$row['email']."</td>
        <td>".$row['tovar']."</td>
        <td>".$row['col']."</td>
        </tr>";
    }
    echo "</table>";
    echo "<br>";
    //После вывода данных закрываем подключение к нашей БД
    mysqli_close($mysqli);
}
?>