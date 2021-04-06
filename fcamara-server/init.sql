CREATE USER IF NOT EXISTS 'fcamara-admin'@'localhost' IDENTIFIED BY '0myadmSQLFCamarapass1';
GRANT ALL PRIVILEGES ON * . * TO 'fcamara-admin'@'localhost';
FLUSH PRIVILEGES;
CREATE DATABASE fcamara;