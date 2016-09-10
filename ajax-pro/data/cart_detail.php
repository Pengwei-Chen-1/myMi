<?php
header('Content-Type:application/json;charset=UTF-8');

@$uname = $_REQUEST['uname'];
if(!$uname){
	echo 'err';
	return;
}

$conn = mysqli_connect('127.0.0.1','root','','jd',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

///SQL 1  根据登录用户名查询用户编号
$sql = "SELECT uid FROM jd_user WHERE uname='$uname'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
$uid = $row['uid'];

///SQL 2  根据用户编号查询购物车编号
$sql = "SELECT cid FROM jd_cart WHERE userID='$uid'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if($row===null){
	echo '[ ]';
	return;
}else{
	$cid = $row['cid'];
}

///SQL 3 根据编号查询购物车产品详情和产品表-----跨表查询-----购物车的内容
$sql = "SELECT did,pid,pic,pname,price,count  FROM jd_product,jd_cart_detail WHERE cartID='$cid' AND jd_product.pid=jd_cart_detail.productID";
$result = mysqli_query($conn,$sql);
$output = [];
while( ($row = mysqli_fetch_assoc($result))!==null ){
	$output[] = $row;
}
echo json_encode($output);


