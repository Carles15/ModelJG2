<?php

$servername = "localhost";
$username = "root";
$dbpassword = "";
$dbase_name = "pruebacarles";

$idBorrado = $_POST['id'];

$connection = new mysqli($servername,$username,$dbpassword,$dbase_name)or die("Connection Error: " . mysql_error());

$sql = "DELETE FROM usuarios WHERE id='$idBorrado'";
$result = $connection->query($sql);

$connection->close();

?>



