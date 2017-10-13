DROP DATABASE if exists bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT AUTO_INCREMENT,
	product_name VARCHAR(30) NOT NULL,  
	department_name VARCHAR(30) NOT NULL,
	price DECIMAL(10,4) NOT NULL,
	stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Nintendo Switch', 'Electronics',300.00,5);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Xbox One X', 'Electronics',500.00,4);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Scissors', 'Lifestyle', 5.99, 3);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Movie Poster', 'Lifestyle', 12.99, 2);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Google Chromecast', 'Electronics', 39.99, 1);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Aquafina Water Bottle', 'Drinks', 3.99, 5);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('50 Shades of Grey', 'Books', 19.99, 150);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Brita Filters', 'Lifestyle', 40, 120);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Puppies', 'Pets', 499.99, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Memes', 'Electronics', 70.99, 101);

-- UPDATE products SET stock_quantity = stock_quantity + 1 WHERE item_id = 1;

-- SELECT * FROM products WHERE stock_quantity <= 5;

SELECT * FROM products;




