CREATE DATABASE shopvr;

USE shopvr;

-- Creating users table
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100),
  gender VARCHAR(10),
  price INT,
  profile_pic BLOB,
  PRIMARY KEY (ID)
);

-- Creating categories table
CREATE TABLE categories (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  name VARCHAR(100) NOT NULL
);

-- Creating items table
CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  brand VARCHAR(100) NOT NULL,
  item_name VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  pic BLOB NOT NULL,
  category_id INT FOREIGN KEY REFERENCES CATEGORIES (ID),
  user_id INT FOREIGN KEY REFERENCES USERS (ID),
  PRIMARY KEY (ID)
);

-- Creating join table between users and items
-- creates an inner join on foreign key reference in items back to user id
CREATE TABLE users_items AS (
  SELECT users.id, users.name, items.item_name, items.pic, items.brand, items.price
  FROM users
  INNER JOIN items
  ON users.id=items.user_id
);