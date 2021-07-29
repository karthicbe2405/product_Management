const router = require('express').Router();
const product = require('../services/products/product');
const {validator, productSchema} = require('../utils/validator');

router.get('/test_products/2021-2022/product_managemet/products/get',(req,res) => {

   res.status(200).json(product.handleGetProducts());

});

router.post('/test_products/2021-2022/product_managemet/products/post', validator.validate({body : productSchema}) ,(req,res)=>{

    if(product.handleAddProduct(req.body))
        res.status(200).json({'Message' : 'Product Added Successfully'});

});

router.put('/test_products/2021-2022/product_managemet/products/put', (req,res)=>{

    if(product.handleUpdateProduct(req.body))
        res.status(200).json({'Message' : 'Product Updated Successfully'});

});

router.delete('/test_products/2021-2022/product_managemet/products/delete', (req,res)=>{

    if(product.handleDeleteProduct(req.body))
    res.status(200).json({'Message' : 'Product Deleted Successfully'});

});

module.exports = router;