var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

/* GET home page. */
/* router.get('/', productController.index); */

/* buscador de productos */
router.get('/searchProduct', productController.searchProduct);

/* agregar producto */
router.get('/addProduct', productController.addProduct);
module.exports = router;