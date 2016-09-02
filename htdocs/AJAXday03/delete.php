<?php
$n=$_REQUEST['uid'];

$conn=mysqli_connect('127.0.0.1','root',"",'tedu',3306);
$sql="DELETE FROM user WHERE uid=$n";
$result=mysqli_query($conn,$sql);
if($result===false){
	echo'删除失败';
}else{
	echo"删除成功! 删除的记录在服务器中的编号为:$n";            ///.mysqli_insert_id($conn)
}