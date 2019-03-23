USE Great_BayDB;
CREATE TABLE customer_order
(
    id INT NOT NULL
    AUTO_INCREMENT,
     item_id VARCHAR
    (100) NOT NULL,
     product_name VARCHAR
    (100) NOT NULL,
    dept_name VARCHAR
    (15) NOT NULL,
     price DECIMAL
    (10,2) NULL,
    stock_quantity INT NULL,

     PRIMARY KEY
    (id)
);

    INSERT INTO customer_order
        (item_id,poduct_name, dept_name, price, stock_quantity)

    VALUES
        ( )