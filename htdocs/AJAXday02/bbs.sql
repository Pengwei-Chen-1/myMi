SET NAMES UTF8;
DROP DATABASE IF EXISTS bbs;
CREATE DATABASE bbs CHARSET=UTF8;;
USE bbs;

CREATE TABLE bbs_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(10),
	upwd VARCHAR(8),
	sex VARCHAR(2),
	email VARCHAR(30),
	headPic VARCHAR(64)
);
INSERT INTO bbs_user VALUES(
	NULL,
	'张三',
	'12345678',
	'男',
	'12345678@qq.com',
	'img/1.jpg'
);
INSERT INTO bbs_user VALUES(
	NULL,
	'李四',
	'23456789',
	'男',
	'23456789@qq.com',
	'img/2.jpg'
);
INSERT INTO bbs_user VALUES(
	NULL,
	'王五',
	'234567890',
	'男',
	'34567890@qq.com',
	'img/3.jpg'
);
CREATE TABLE bbs_comment(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	content VARCHAR(100),
	pubTime DATE,
	userID VARCHAR(10)
);
INSERT INTO bbs_comment VALUES(
	NULL,
	'这篇帖子写的不错,语句流畅,内容清晰容易理解.',
	'2016-3-5',
	'1'
);
INSERT INTO bbs_comment VALUES(
	NULL,
	'这篇文章写的不错,语句流畅,内容清晰容易理解.',
	'2016-3-8',
	'2'
);
INSERT INTO bbs_comment VALUES(
	NULL,
	'这篇论文写的不错,语句流畅,内容清晰容易理解.',
	'2016-4-8',
	'2'
);
INSERT INTO bbs_comment VALUES(
	NULL,
	'这个段子写的不错,语句流畅,内容清晰容易理解.',
	'2016-4-19',
	'3'
);

#删除1号用户及其发表的评论
#DELETE FROM bbs_user WHERE uid=1;
#DELETE FROM bbs_comment WHERE userID=1;
#查询所有用户及其发表的所有评论
#SELECT * FROM bbs_user;
#SELECT * FROM bbs_comment;
#查询出2号用户所有的评论记录
#SELECT * FROM bbs_comment WHERE userID=2;
#查询出'李四'的所有评论记录
SELECT * FROM bbs_comment
WHERE userID=(SELECT uid FROM bbs_user WHERE uname='李四');