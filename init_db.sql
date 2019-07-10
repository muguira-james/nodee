

CREATE DATABASE IF NOT EXISTS mybooks;

GRANT ALL PRIVILEGES on mybooks.*
TO 'magoo'@'%' IDENTIFIED BY 'mysql'
WITH GRANT OPTION;

use mybooks;

CREATE table customers (
    idd INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255)
) ;