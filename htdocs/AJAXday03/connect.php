<?php
$conn=mysqli_connect('127.0.0.1','root',"",'tedu',3306);
$sql="INSERT INTO user VALUES(
	NULL,
	'wangxiaosheng',
	'img/5.jpg',
	'15323154521355',
	'是'
)";
$result=mysqli_query($conn,$sql);
if($result===false){
	echo'l链接失败';
}else{
	echo'链接成功!  新插入的记录在服务器中的自增编号为:'.mysqli_insert_id($conn);
}

mysqli_close($conn);