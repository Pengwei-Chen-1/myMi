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
		<h1>2.php</h1>
		<?php
			$msg = 'hello';
		//echo($msg);
			for($i=0;$i<10;$i++){
				echo($msg);
				echo('<hr>');
			}
		?>
	</body>
</html>
	