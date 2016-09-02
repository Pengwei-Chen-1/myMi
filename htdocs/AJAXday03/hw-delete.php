<?php
$uid=$_REQUEST['uid'];
$conn=mysqli_connect('127.0.0.1','root','','tarena',3306);
$sql="DELETE FROM msg WHERE uid=$uid";
$result=mysqli_query($conn,$sql);
if($result===false){
  echo "执行失败！可能原因：$sql";
}else {
  echo "执行成功！";
}