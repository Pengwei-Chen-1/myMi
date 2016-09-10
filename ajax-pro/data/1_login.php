<?php
header('Content-Type:application/json;charset=UTF-8');

$name = $_REQUEST['uname'];
$pwd = $_REQUEST['upwd'];
$conn = mysqli_connect('127.0.0.1','root','','jd',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "SELECT * FROM jd_user WHERE uname='$name' AND upwd='$pwd'";
$result = mysqli_query($conn,$sql);

$output = ['code'=>0,'msg'=>null];

if(!$result){
	//$str = json_encode({"code":"1001","msg":"SQL语句错误!"});
	//echo $str;
	$output['code'] = 1001;
	$output['msg'] = 'SQL语句错误!';
}else{
	$row=mysqli_fetch_assoc($result);
	if($row===null ){
		//$str = json_encode({"code":"1002","msg":"登录信息验证正确!"});
		//echo $str;
		$output['code'] = 1002;
		$output['msg'] = '用户名或密码错误!';
	}else{
		//$str = json_encode({"code":"1003","msg":"用户名或密码错误!"});
		//echo $str;
		$output['code'] = 1000;
		$output['msg'] = '登录信息验证正确!';
	}
}
echo json_encode($output);