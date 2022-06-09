const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.get('/products', controllers.products.getProducts);
router.get('/products/:product_id', controllers.products.getProductInfo);
router.get('/products/:product_id/styles', controllers.products.getProductStyles);
router.get('/products/:product_id/related', controllers.products.getRelatedProduct);
router.get('/products/:product_id/features', controllers.products.getFeatures);

module.exports = router;