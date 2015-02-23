<?php
session_start();

if(isset($_SESSION['id'])){
    if($_SESSION['id'] == 1){
        echo "200";
    }else{
        echo "404";
    }
}else{
    echo "404";
}
?>

