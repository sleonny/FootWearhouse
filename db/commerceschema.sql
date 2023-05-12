DROP DATABASE IF EXISTS commerce_db;
CREATE DATABASE commerce_db;

USE DATABASE commerce_db;

CREATE TABLE sales (
    product_id INTEGER NOT NULL PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    product_description VARCHAR(100) NOT NULL,
    product_price INTEGER NOT NULL
);

CREATE TABLE trades (
    product_id INTEGER NOT NULL PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    product_description VARCHAR(100) NOT NULL,
    looking_for VARCHAR (30) NOT NULL,
    FOREIGN KEY (sale_id) REFERENCES sales(id)
    ON DELETE SET NULL
);
