DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products
(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100) NOT NULL,
    department_name VARCHAR (100) NOT NULL,
    price DECIMAL (10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);


-- INSERT INTO products
--     (flavor, price, quantity)
--   VALUES
--     ("vanilla", 2.50, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES
('ipod', 'electronic',99.97, 50),
('spoon','houseware',0.75, 100),
('cookies','food', 0.50, 100),
('ducks','animal',65.00, 30);



