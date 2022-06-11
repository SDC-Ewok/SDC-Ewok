var db = require('../database/index.js');

module.exports = {
  getProducts: (page, count, cb) => {
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
    const queryStr = `select products.*,
    (select
      jsonb_agg(jsonb_build_object('features', features.feature, 'value', features.value)) from features where features.product_id=${id}) as features
    from Products Where products.id = ${id};`;
    db.query(queryStr, (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    });
  },

  getProductStyles: (id, cb) => {
    const queryStr = `
    select
      styles.id AS "style_id",
      name,
      original_price,
      sale_price,
      default_style AS "default?",
      (select
        jsonb_agg(jsonb_build_object('thumbnail_url', photos.thumbnail_url, 'url', photos.url))
          from photos where photos.style_id=styles.id) As "photos",
      (select
        jsonb_object_agg(skus.id, jsonb_build_object('quantity', skus.quantity, 'size', skus.quantity))
        from skus where skus.style_id=styles.id) AS "skus"
      from
      styles
      WHERE styles.productId=${id}
      ORDER BY styles.id
    `;
    db.query(queryStr, (err, res) => {
      if (err) {
        cb(err);
      } else {
        const productStyles = {
          product_id: id,
          results: res.rows
        };
        cb(null, productStyles);
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
  },

  getFeatures: (id, cb) => {
    let queryStrFeatures = `
    SELECT json_build_object(
      'features', (SELECT json_agg(row_to_json(features))
      FROM (SELECT feature, value from features WHERE features.product_id=${id})features))
    `;
    db.query(queryStrFeatures, (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    });
  },

  getProductPhotos: (id, cb) => {
    const queryStr = `
    select
    json_agg(json_build_object('thumbnail_url', photos.thumbnail_url, 'url', photos.url))
    from photos where photos.style_id=${id}`;
    db.query(queryStr, (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    });
  },

  getProductSkus: (id, cb) => {
    const queryStr = `
    select
    json_object_agg(skus.id, json_build_object('quantity', skus.quantity, 'size', skus.quantity))
    from skus where skus.style_id=${id}
    `;
    db.query(queryStr, (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    });
  },
};


// SELECT json_build_object(
//   'features', (SELECT json_agg(row_to_json(features))
//   FROM (SELECT feature, value from features WHERE features.product_id=10)features))
//array of object of features:
// SELECT json_agg(row_to_json(features)) FROM (SELECT feature, value from features WHERE features.product_id=10)features;
// (select
//   json_agg(json_build_object('thumbnail_url', photos.thumbnail_url, 'url', photos.url))
//   from photos where photos.style_id=${id}) As "photos",
// (select
//   json_object_agg(skus.id, json_build_object('quantity', skus.quantity, 'size', skus.quantity))
//   from skus where skus.style_id=${id}) AS "skus"