<?php
//读取客户提交的数据
$n=$_REQUEST['uname'];
$p=$_REQUEST['pic'];
$t=time()*1000; //获得服务器系统的时间
$a=1;

$conn=mysqli_connect('127.0.0.1','root',"",'tedu',3306);
$sql="INSERT INTO user VALUES(
	NULL,
	'$n',
	'$p',
	'$t',
	'$a'
)";
$result=mysqli_query($conn,$sql);
if($result===false){
	echo'l链接失败';
}else{
	echo'链接成功!  新插入的记录在服务器中的自增编号为:'.mysqli_insert_id($conn);
}

mysqli_close($conn);