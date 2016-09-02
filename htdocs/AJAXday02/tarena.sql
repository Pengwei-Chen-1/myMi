SET NAMES UTF8;
DROP DATABASE IF EXISTS tarena;
CREATE DATABASE tarena CHARSET=UTF8;
USE tarena;

CREATE TABLE dept(
	did INT PRIMARY KEY,
	name VARCHAR(4),
	location VARCHAR(4)
);
INSERT INTO dept VALUES(10,'市场部','北京');
INSERT INTO dept VALUES(20,'研发部','上海');
INSERT INTO dept VALUES(30,'运营部','杭州');
CREATE TABLE emp(
	eid INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(4),
	sex VARCHAR(4),
	salary FLOAT(8,2),
	birthday DATE,
	phone FLOAT(11,0),
	septID INT
);

INSERT INTO emp VALUES(
	NULL,
	'张三',
	'男',
	'3000',
	'1990-1-1',
	'13564789121',
	10
);
INSERT INTO emp VALUES(
	NULL,
	'李四',
	'男',
	'3500',
	'1990-2-2',
	'13745658921',
	10
);
INSERT INTO emp VALUES(
	NULL,
	'王二',
	'男',
	'4000',
	'1989-9-8',
	'13526489566',
	20
);
INSERT INTO emp VALUES(
	NULL,
	'王五',
	'男',
	'4500',
	'1989-8-8',
	'13838855695',
	30
);
SELECT * FROM emp;









