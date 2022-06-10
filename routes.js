const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.get('/products', controllers.products.getProducts);
router.get('/products/:product_id', controllers.products.getProductInfo);
router.get('/products/:product_id/styles', controllers.products.getProductStyles);
router.get('/products/:product_id/related', controllers.products.getRelatedProduct);
router.get('/products/:product_id/features', controllers.products.getFeatures);
router.get('/products/:product_id/photos', controllers.products.getPhotos);
router.get('/products/:product_id/skus', controllers.products.getSkus);

module.exports = router;