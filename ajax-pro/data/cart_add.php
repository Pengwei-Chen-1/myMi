<?php
header('Content-Type:application/json;charset=UTF-8');

@$pid = $_REQUEST['pid'];        //产品编号
@$uname = $_REQUEST['uname'];   //用户名称
if( !$pid || !$uname ){
	echo 'err';
	return;         //缺少产品编号或用户名 , 则退出执行
}

$conn = mysqli_connect('127.0.0.1','root','','jd',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

///SQL 1

$sql = "SELECT uid FROM jd_user WHERE uname='$uname'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
$uid = $row['uid'];

///SQL 2

$sql = "SELECT cid FROM jd_cart WHERE userID='$uid'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);

if($row===null){//没有购物车-----INSERT
	///SQL 3
	$sql = "INSERT INTO jd_cart VALUES(NULL,$uid);";
	$result = mysqli_query($conn,$sql);
	$cid = mysqli_insert_id($conn);
}else {//已有购物车-----SELECT
	$cid = $row['cid'];
}

///SQL 4
$sql = "SELECT did FROM jd_cart_detail WHERE cartID=$cid AND productID=$pid";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if($row===null){//没有该商品------INSERT
	///SQL 5
	$sql = "INSERT INTO jd_cart_detail VALUES(NULL,'$cid','$pid','1')";
	$result = mysqli_query($conn,$sql);
	$output = [
		'code'=>2000,
		'msg'=>'added'
	];
}else {//有该商品,更新购买数量-----UPDATE
	///SQL 6
	$did = $row['did'];
	$sql = "UPDATE jd_cart_detail SET count=count+1 WHERE did=$did";
	$result = mysqli_query($conn,$sql);
	$output = [
		'code'=>2001,
		'msg'=>'updated'
	];
}

echo json_encode($output);


