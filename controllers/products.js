var models = require('../models');

module.exports = {
  getProducts: (req, res) => {
    let page = req.query.page;
    let count = req.query.count;
    models.products.getProducts(page, count, (err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(result);
      }
    });
  },

  getProductInfo: (req, res) => {
    var id = req.params.product_id;
    models.products.getProductInfo(id, (err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(result);
      }
    });
  },

  getProductStyles: (req, res) => {
    var id = req.params.product_id;
    models.products.getProductStyles(id, (err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        const result = {
          productId: id,
          results: result,
        };
        res.send(result);
      }
    });
  },
  getRelatedProduct: (req, res) => {
    var id = req.params.product_id;
    models.products.getRelatedProduct(id, (err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(result);
      }
    });
  },

  getFeatures: (req, res) => {
    var id = req.params.product_id;
    models.products.getFeatures(id, (err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(result);
      }
    });
  }
};