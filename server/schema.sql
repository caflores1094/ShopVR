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

-- Creating categories table
CREATE TABLE IF NOT EXISTS categories (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  name VARCHAR(100) NOT NULL
);

-- Creating items table
CREATE TABLE IF NOT EXISTS items (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  brand VARCHAR(100) NOT NULL,
  item_name VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  pic LONGBLOB NOT NULL,
  category_id INT,
  FOREIGN KEY fk_cat(category_id) REFERENCES categories(id),
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

-- -- Creating join table between picture and tags
CREATE TABLE IF NOT EXISTS pictures_tags AS (
  SELECT pictures.id, pictures.name, tags.tag
  FROM pictures
  INNER JOIN tags
  ON pictures.name=tags.pic_name
);

-- Creating join table between users and items
-- creates an inner join on foreign key reference in items back to user id
CREATE TABLE IF NOT EXISTS users_items AS (
  SELECT users.id, users.name, items.item_name, items.pic, items.brand, items.price
  FROM users
  INNER JOIN items
  ON users.id=items.user_id
);
