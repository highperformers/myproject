<!DOCTYPE HTML>
<html lang='ko'>
<head>
	<title>Ajax Contact Form Send Page</title>
	<meta charset='utf-8'>
	
</head>
<body>
	<h1>성공적으로 전송이 완료 되었습니다.</h1>
	<ul class='ajax-wrap'>
		<li>이름  : <? echo $_POST[irum]; ?>    </li>
		<li>이메일 : <? echo $_POST[email]; ?>   </li>
		<li>메시지 : <? echo $_POST[message]; ?> </li>
	</ul>
	
	<p><a href='index.html'>HOME으로 돌아가기</a></p>
</body>
</html>