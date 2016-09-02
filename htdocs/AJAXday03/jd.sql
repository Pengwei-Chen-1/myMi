SET NAMES UTF8;
DROP DATABASE IF EXISTS jd;
CREATE DATABASE jd CHARSET=UTF8;
USE jd;

CREATE TABLE category(
	cid INT PRIMARY KEY,
	name VARCHAR(10),
	count VARCHAR(10)
);
INSERT INTO category VALUES(
	'10',
	'手机',
	'500'
);
INSERT INTO category VALUES(
	'20',
	'相机',
	'350'
);
CREATE TABLE goods(
	gid INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(10),
	price FLOAT(8,2),
	pic VARCHAR(20),
	birthday BIGINT,
	categoryID INT
);
INSERT INTO goods VALUES(
	NULL,
	'小米手机',
	'999',
	'img/1.jpg',
	'123264854613',
	'10'
);
INSERT INTO goods VALUES(
	NULL,
	'红米手机',
	'998',
	'img/2.jpg',
	'154862346562',
	'10'
);
INSERT INTO goods VALUES(
	NULL,
	'佳能相机',
	'4998',
	'img/3.jpg',
	'134663236463',
	'20'
);
INSERT INTO goods VALUES(
	NULL,
	'柯达相机',
	'3998',
	'img/6.jpg',
	'144632636846',
	'20'
);
SELECT * FROM goods WHERE categoryID=(SELECT cid FROM category WHERE name='手机');