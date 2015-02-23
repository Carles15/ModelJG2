<?php

$servername = "localhost";
$username = "root";
$dbpassword = "";
$dbase_name = "pruebacarles";

$usuario = $_POST['usuario'];
$passowrd = $_POST['password'];

$connection = new mysqli($servername,$username,$dbpassword,$dbase_name)or die("Connection Error: " . mysql_error());

$sql = "INSERT INTO usuarios VALUES(null,'$usuario','$passowrd')";
$result = $connection->query($sql);

$connection->close();
?>

