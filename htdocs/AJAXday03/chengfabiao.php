<!--1、文档类型声明 -->
<!doctype html>
<!---2、html根标记  -->
<html>
	<!-- 头元素 -->
	<head>
		<!-- 定义标题-->
		<title>我的文档</title>
		<!--定义网页格式编码-->
		<meta charset="utf-8">
	</head>
	<!-- 主体内容 -->
	<body>
		<table border='1'>
			<tbody>
				<?php
				for($i=1;$i<10;$i++){
					echo('<tr>');
					for($j=1;$j<=$i;$j++){
						echo('<td>');
						echo($j);
						echo('*');
						echo($i);
						echo('=');
						echo($i*$j);
						echo('</td>');

					}
				}
					echo('</tr>');
				?>
			</tbody>
		</table>
	</body>
</html>
	