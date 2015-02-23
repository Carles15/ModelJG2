<?php
session_start();

$servername = "localhost";
$username = "root";
$dbpassword = "";
$dbase_name = "pruebacarles";

$usuario = $_POST['usuario'];
$passowrd = $_POST['password'];

$connection = new mysqli($servername, $username, $dbpassword, $dbase_name)or die("Connection Error: " . mysql_error());

$sql = "SELECT * FROM usuarios WHERE usuario='$usuario' AND password = '$passowrd'";
$result = $connection->query($sql);

if ($result->num_rows > 0) {
    while ($row = mysqli_fetch_array($result)) {
        $dato = $row['usuario'];
    }
    $_SESSION['id'] = 1;
    $session = $_SESSION['id'];
//    
//    $dato = array('usuario'=>$dato,'session' =>$session);
//    echo json_encode($dato);
    echo "200";
}else{
    echo "404";
}
?>

