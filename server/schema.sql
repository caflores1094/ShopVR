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
  name VARCHAR(100) NOT NULL,
)

-- Creating items table
CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  brand VARCHAR(100) NOT NULL,
  item_name VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  pic BLOB NOT NULL,
  category_id INT FOREIGN KEY REFERENCES CATEGORIES (ID)
  PRIMARY KEY (ID)
);