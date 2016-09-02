<?php
//phpinfo();                                    //查看PHP的版本
//var_dump($arr);                            //查看变量的类型和内容

$score=[60,70,80,90,86];                    //数组
echo'<ul>';
for($i=0;$i<count($score);$i++){
	echo"<li>$score[$i]</li>";
}
echo'</ul>';
echo'<hr>';

$bookList=[];
$bookList[]=['name'=>'三体','price'=>12,'date'=>'2016.3.4','isOnSale'=>true];
$bookList[]=['name'=>'密码','price'=>18,'date'=>'2016.5.4','isOnSale'=>false];
$bookList[]=['name'=>'清明上河图','price'=>22,'date'=>'2016.2.4','isOnSale'=>true];

echo'<table border="1" width="400px">';



foreach($bookList as $book){
	echo"<tr>";
	$n=$book['name'];
	echo"<td>$n</td>";
	$p=$book['price'];
	echo"<td>$p</td>";
	$d=$book['date'];
	echo"<td>$d</td>";
	$s=$book['isOnSale'];
	$s=$s?"是":"否";
	echo"<td>$s</td>";
	echo"</tr>";

}
echo'</table>';
