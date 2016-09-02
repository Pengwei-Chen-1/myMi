<?php
$conn=mysqli_connect('127.0.0.1','root','','tarena',3306);
$sql="SELECT * FROM msg";
$result=mysqli_query($conn,$sql);
if($result===false){
  echo "fail!because:$sql";
}else {
  echo "success!";
  while(true){
	$row=mysqli_fetch_assoc($result);
	if($row===null){
		break;
	}
	//var_dump($row);
	echo"<hr>";
	echo"<div>";
	echo"发布人：$row[uname]<br>
		 发布时间:$row[time]<br>
		 联系方式:$row[phone]<br>
		 留言内容:$row[content]";
	echo"<a href='hw-delete.php?uid=$row[uid]'>&times;</a>";
	echo"</div>";
  }
}