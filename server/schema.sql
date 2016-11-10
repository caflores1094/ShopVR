CREATE DATABASE IF NOT EXISTS shopvr;

USE shopvr;

-- Creating users table
CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100),
  gender VARCHAR(10),
  price INT,
  profile_pic BLOB,
  PRIMARY KEY (id)
);

-- Creating categories table
CREATE TABLE IF NOT EXISTS categories (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

-- Creating items table
CREATE TABLE IF NOT EXISTS items (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  brand VARCHAR(100) NOT NULL,
  item_name VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  pic BLOB NOT NULL,
  category_id INT NOT NULL,
  FOREIGN KEY fk_cat(category_id) REFERENCES categories(id),
  user_id INT NOT NULL,
  FOREIGN KEY fk_user(user_id) REFERENCES users(id),
  PRIMARY KEY (id)
);

-- Creating join table between users and items
-- creates an inner join on foreign key reference in items back to user id
CREATE TABLE users_items IF NOT EXISTS AS (
  SELECT users.id, users.name, items.item_name, items.pic, items.brand, items.price
  FROM users
  INNER JOIN items
  ON users.id=items.user_id
);

-- Run mysql -u <username> server/schema.sql to create databases