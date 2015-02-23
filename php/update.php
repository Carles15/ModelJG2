<?php

$servername = "localhost";
$username = "root";
$dbpassword = "";
$dbase_name = "pruebacarles";

$id = $_POST['id'];
$usuario = $_POST['usuario'];
$passowrd = $_POST['password'];

$connection = new mysqli($servername,$username,$dbpassword,$dbase_name);

$sql = "UPDATE usuarios SET usuario = '$usuario', password = '$passowrd' WHERE id = '$id'";
$result = $connection->query($sql);

$connection->close();
?>

