const router = require('express').Router();
const product = require('../services/products/product');

router.get('/test_products/2021-2022/product_managemet/products/get',(req,res,next) => {

   res.send(product.handleGetProducts());

});

router.post('/test_products/2021-2022/product_managemet/products/post', (req,res)=>{

    product.handleAddProduct(req.body.product);

});

router.put('/test_products/2021-2022/product_managemet/products/put', (req,res)=>{

    product.handleUpdateProduct(req.body.product);

});

router.delete('/test_products/2021-2022/product_managemet/products/delete', (req,res)=>{

    product.handleDeleteProduct(req.body.product);

});

module.exports = router;