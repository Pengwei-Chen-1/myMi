/*
多行注释
*/
#单行注释

#SHOW DATABASES;
#USE phpmyadmin;
#USE mysql;
#SHOW TABLES;

#指定后续的SQL语句所用的编码方式
SET NAMES UTF8;
#试着删除一个指定的数据库(如果存在的话)
DROP DATABASE IF EXISTS jd;
#创建指定的数据库,声明保存数据所用的编码方式
CREATE DATABASE jd CHARSET=UTF8;
#进入刚刚创建的库
USE jd;

#创建保存商品信息的表:product
CREATE TABLE product(
	pid INT PRIMARY KEY AUTO_INCREMENT,     #主键列,不能出现重复值
	name VARCHAR(64),       #变长字符串
	pic VARCHAR(64),           #产品图片是字符串类型
	price FLOAT(8,2),            #999999.99
	birthday DATE,               #出厂日期
	isOnSale BOOLEAN       #是否特价
);
#向产品表中插入记录行
INSERT INTO product VALUES(
	NULL,
	'Pepsi 600ml',
	'img/1.jpg',
	'3.5',
	'2016-3-5',
	'0'
);
INSERT INTO product VALUES(
	NULL,
	'Sprite 600ml',
	'img/2.jpg',
	'4.0',
	'2016-4-8',
	'0'
);
INSERT INTO product VALUES(
	NULL,
	'Fanta 600ml',
	'img/3.jpg',
	'3.6',
	'2016-3-16',
	'0'
);
INSERT INTO product VALUES(
	NULL,
	'鲜橙多 600ml',
	'img/4.jpg',
	'3.7',
	'2016-3-1',
	'0'
);
INSERT INTO product VALUES(
	NULL,
	'王老吉 600ml',
	'img/4.jpg',
	'3.6',
	'2016-3-16',
	'0'
);
INSERT INTO product VALUES(
	NULL,
	'鲜橙多 600ml',
	'img/4.jpg',
	'3.7',
	'2016-3-1',
	'0'
);

#删除指定的记录行
#DELETE FROM product;        #删除所有记录行
DELETE FROM product WHERE pid=4;    #删除满足条件的行

#修改指定的记录行
UPDATE product  
SET name='加多宝 600ml',pic='img/66.jpg',price='6.6'    
WHERE pid=6;


#查询所有的产品记录
SELECT*FROM product;
#查询所有产品的名称和价格
SELECT name,price,pic FROM product;
#查看6号产品的所有列
SELECT *FROM product
WHERE pid=6;