<?php
header('Content-Type:application/json;charset=UTF-8');

$conn = mysqli_connect('127.0.0.1','root','','jd',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$start = 0;
$count = 8;
$sql = "SELECT * FROM jd_product LIMIT $start,$count";
$result = mysqli_query($conn,$sql);

$output = [];
while( ($p=mysqli_fetch_assoc($result))!==null ){
	$output[] = $p;
}
echo json_encode($output);