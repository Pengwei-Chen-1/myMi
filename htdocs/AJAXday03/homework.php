<?php
$n=$_REQUEST['uname'];
$p=$_REQUEST['phone'];
$t=time()*1000;
$c=$_REQUEST['content'];

$conn=mysqli_connect('127.0.0.1','root','','tarena',3306);
$sql="INSERT INTO msg VALUES(NULL,'$n','$p','$t','$c')";
$result=mysqli_query($conn,$sql);
if($result===false){
	echo'fail';
}else{
	echo'success,the id is'.mysqli_insert_id($conn);
}
mysqli_close($conn);


