const bcrypt = require('bcrypt');

DROP DATABASE IF EXISTS users_db;
CREATE DATABASE users_db;

USE users_db;

CREATE TABLE user_info (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR NOT NULL,
)