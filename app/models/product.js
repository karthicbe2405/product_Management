const fileHandler = require('../utils/file-handler');

let Product = function(){

};

Product.prototype.getProducts = function(){

    return fileHandler.getProductData();
    
}

Product.prototype.addProduct = function(product){

    let Products = this.getProducts();

    let newProductId = Math.floor(( Math.random() + Math.random() ) * 10000);

    Products[newProductId] = product;

    fileHandler.saveProductData(Products);

}

Product.prototype.updateProduct = function(productId,product){

    let Products = this.getProducts();

    Products[productId] = product;

    fileHandler.saveProductData(Products);

}

Product.prototype.deleteProduct = function(productId){

    let Products = this.getProducts();

    delete Products[productId];

    fileHandler.saveProductData(Products);

}

module.exports = new Product();