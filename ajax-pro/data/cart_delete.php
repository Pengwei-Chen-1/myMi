<?php
header('Content-Type:text/plain;charset=UTF-8');

$did = $_REQUEST['did'];

$conn = mysqli_connect('127.0.0.1','root','','jd',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "DELETE FROM jd_cart_detail WHERE did=$did";
$result = mysqli_query($conn,$sql);

if(!$result){
	echo 'err';
}else{
	echo 'success';
}