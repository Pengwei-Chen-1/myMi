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
		<table width='300px'  border='1'>
			<thead>
				<th>编号</th>
				<th>姓名</th>
				<th>语文</th>
				<th>数学</th>
			</thead>
			<tbody>
				<?php
					$stuList=[
						[101,'tom',55,80],
						[102,'smish',65,80],
						[103,'mary',75,80],
						[104,'jay',65,85]
					];
					for($i=0;$i<count($stuList);$i++){
						$stu=$stuList[$i];
						echo '<tr>';
						echo '<td>'.$stu[0].'</td>';
						echo '<td>'.$stu[1].'</td>';
						echo '<td>'.$stu[2].'</td>';
						echo '<td>'.$stu[3].'</td>';
						echo '</tr>';

					}
				?>
			</tbody>

		</table>	
	</body>
</html>

	