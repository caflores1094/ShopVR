CREATE DATABASE shopvrtest;

USE shopvrtest;

-- Creating users table
CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  gender VARCHAR(10),
  locale VARCHAR(10),
  timezone VARCHAR(10),
  friends VARCHAR(10000),
  fb_id VARCHAR(255) NOT NULL UNIQUE,
  profile_pic VARCHAR(1000),
  min_price INT,
  max_price INT,
  PRIMARY KEY (ID)
);

-- Creating items table
CREATE TABLE IF NOT EXISTS items (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  brand VARCHAR(100) NOT NULL,
  item_name VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  pic LONGBLOB NOT NULL,
  user_id INT,
  FOREIGN KEY fk_user(user_id) REFERENCES users(id),
  PRIMARY KEY (ID)
);

-- Creating uploaded pictures table
CREATE TABLE IF NOT EXISTS pictures (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  name VARCHAR(255),
  u_id INT,
  FOREIGN KEY fk_u(u_id) REFERENCES users(id),
  PRIMARY KEY (name)
);

-- Creating tags table
CREATE TABLE IF NOT EXISTS tags (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  tag VARCHAR(255),
  pic_name VARCHAR(255),
  FOREIGN KEY fk_pic(pic_name) REFERENCES pictures(name),
  PRIMARY KEY (ID)
);

-- Creating wishlist table
CREATE TABLE IF NOT EXISTS wishlist (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  item_name VARCHAR(255),
  pic_name VARCHAR(255),
  price INT,
  url VARCHAR(10000),
  userid INT,
  FOREIGN KEY fk_userid(userid) REFERENCES users(id),
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS users_friends (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  name VARCHAR(255),
  uid INT,
  FOREIGN KEY fk_p(uid) REFERENCES users(id),
  fid INT,
  FOREIGN KEY fk_f(fid) REFERENCES users(id),
  pair VARCHAR(255) UNIQUE,
  PRIMARY KEY (ID)
);
