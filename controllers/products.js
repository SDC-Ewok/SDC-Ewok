var models = require('../models');

module.exports = {
  getProducts: (req, res) => {
    let page = req.query.page || 1;
    let count = req.query.count || 5;
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
        // const result = {
        //   productId: id,
        //   results: result,
        // };
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
  },
  getPhotos: (req, res) => {
    var id = req.params.product_id;
    models.products.getProductPhotos(id, (err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(result);
      }
    });
  },
  getSkus: (req, res) => {
    var id = req.params.product_id;
    models.products.getProductSkus(id, (err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(result);
      }
    });
  }
};