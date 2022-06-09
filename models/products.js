var db = require('../database/index.js');

module.exports = {
  getProducts: (page = 1, count = 5, cb) => {
    const queryStr = `SELECT * FROM products ORDER BY id limit ${count} OFFSET ${(page - 1) * count}`;
    db.query(queryStr, (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    });
  },

  getProductInfo: (id, cb) => {
    const queryStr = `SELECT products.*, features.id as featureid, features.product_id as productid, features.feature, features.value FROM products LEFT JOIN features ON products.id = features.product_id WHERE products.id = ${id}`;
    db.query(queryStr, (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    });
  },
  getProductStyles: (id, cb) => {
    const queryStr = ``;
    db.query(queryStr, (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    });

  },
  getRelatedProduct: (id, cb) => {
    const queryStr = `SELECT related_prod_id FROM related_products WHERE curr_prod_id = ${id}`;
    db.query(queryStr, (err, res) => {
      if (err) {
        cb(err);
      } else {
        const relatedProducts = res.rows.map((eachrelated) => eachrelated.related_prod_id);
        cb(null, relatedProducts);
      }
    });
  }
};