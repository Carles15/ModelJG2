<?php
session_start();

$servername = "localhost";
$username = "root";
$dbpassword = "";
$dbase_name = "pruebacarles";

$page = $_GET['page']; // get the requested page
$limit = $_GET['rows']; // get how many rows we want to have into the grid 
$sidx = $_GET['sidx']; // get index row - i.e. user click to sort 
$sord = $_GET['sord']; // get the direction 

if(isset($_SESSION['id'])){
    if (!$sidx) $sidx = 1;


// connect to the database 
$connection = new mysqli($servername,$username,$dbpassword,$dbase_name)or die("Connection Error: " . mysql_error());
$sql = "SELECT COUNT(*) AS count FROM usuarios";
$result = $connection->query($sql);

while($row = mysqli_fetch_array($result)){
    $count = $row['count'];
}

if ($count > 0) {
    $total_pages = ceil($count / $limit);
} else {
    $total_pages = 0;
} 

if ($page > $total_pages) $page = $total_pages;

$start = $limit * $page - $limit; // do not put $limit*($page - 1) 


$sql2 = "SELECT * FROM usuarios ORDER BY $sidx $sord LIMIT $start , $limit";
$result2 = $connection->query($sql2);

$responce = new stdClass();
$responce->page = $page;
$responce->total = $total_pages;
$responce->records = $count;
$i = 0;

while ($row = mysqli_fetch_array($result2)) {
    $responce->rows[$i]['id'] = $row['id'];
    $responce->rows[$i]['cell'] = array($row['id'], $row['usuario'], $row['password']);
    $i++;
} echo json_encode($responce);
}

?>

