const bcrypt = require('bcrypt');

DROP DATABASE IF EXISTS users_db;
CREATE DATABASE users_db;

USE users_db;

CREATE TABLE user_info (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
);

<-- Using bcrypt to hash user password; need to store hashed password in variable and insert it on table -->
const password = 'userpassword';
const hashedPassword = await bcrypt.hash(password, 10);

const insertQuery = INSERT INTO user_info (first_name, last_name, email, password) VALUES ('Sean', 'Leonard', 'leonardmesean@gmail.com', ${hashedPassword});