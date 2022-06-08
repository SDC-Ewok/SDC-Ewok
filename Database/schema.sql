DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

\c products;

DROP TABLE IF EXISTS products, features, related_products, styles, photos, skus;

CREATE TABLE products (
  id INT UNIQUE PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  slogan VARCHAR(300) NOT NULL,
  description VARCHAR(500) NOT NULL,
  category VARCHAR(300) NOT NULL,
  default_price VARCHAR(50 ) NOT NULL
);


CREATE TABLE features (
  id INT UNIQUE PRIMARY KEY NOT NULL,
  product_id INT NOT NULL,
  feature VARCHAR(50) NOT NULL,
  value VARCHAR(50) NOT NULL,
  CONSTRAINT fk_Features_Products FOREIGN KEY (product_id) REFERENCES products(id)
);


CREATE TABLE related_products (
  id INT UNIQUE PRIMARY KEY NOT NULL,
  curr_prod_id INT NOT NULL,
  related_prod_id INT NOT NULL,
  CONSTRAINT fk_RelatedProducts_Products FOREIGN KEY (curr_prod_id) REFERENCES products(id)
);

CREATE TABLE styles (
  id INT UNIQUE PRIMARY KEY NOT NULL,
  productId INT NOT NULL,
  name VARCHAR(50) NOT NULL ,
  sale_price VARCHAR(50) NOT NULL,
  original_price VARCHAR(50) NOT NULL ,
  default_style VARCHAR NOT NULL,
  CONSTRAINT fk_Styles_Products FOREIGN KEY (product_id) REFERENCES products(id)
);


CREATE TABLE photos (
  id INT UNIQUE PRIMARY KEY NOT NULL,
  style_id INT NOT NULL,
  url TEXT NOT NULL,
  thumbnail_URL TEXT NOT NULL,
 CONSTRAINT fk_Photos_Styles FOREIGN KEY (style_id) REFERENCES styles(id)
);


CREATE TABLE skus (
  id INT UNIQUE PRIMARY KEY NULL,
  style_id INT NOT NULL,
  size VARCHAR(8) NOT NULL,
  quantity INT NOT NULL,
  CONSTRAINT fk_Skus_Styles FOREIGN KEY (style_id) REFERENCES styles(id)
);

Copy products
  From '/Users/leyu/HackReactor/Immersive/rfp2204/SDC /SDC-Example-Data/product.csv'
  DELIMITER ','
  CSV HEADER;

Copy features
  From '/Users/leyu/HackReactor/Immersive/rfp2204/SDC /SDC-Example-Data/features.csv'
  DELIMITER ','
  CSV HEADER;

Copy related_products
  From '/Users/leyu/HackReactor/Immersive/rfp2204/SDC /SDC-Example-Data/related.csv'
  DELIMITER ','
  CSV HEADER;

Copy styles
  From '/Users/leyu/HackReactor/Immersive/rfp2204/SDC /SDC-Example-Data/styles.csv'
  DELIMITER ','
  CSV HEADER;

Copy photos
  From '/Users/leyu/HackReactor/Immersive/rfp2204/SDC /SDC-Example-Data/photos.csv'
  DELIMITER ','
  CSV HEADER;

Copy skus
  From '/Users/leyu/HackReactor/Immersive/rfp2204/SDC /SDC-Example-Data/skus.csv'
  DELIMITER ','
  CSV HEADER;




