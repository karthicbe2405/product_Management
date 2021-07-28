const product = require('../../models/product');

class Products{

    handleGetProducts(){
        
        return product.getProducts();

    }

    handleAddProduct(productDetails){

        product.addProduct(productDetails);

    }

    handleUpdateProduct(productDetails){

        let productId = productDetails['id'];
        delete productDetails['id'];

        product.updateProduct(productId,productDetails);

    }

    handleDeleteProduct(productDetails){

        product.deleteProduct(productDetails['id']);

    }
}

module.exports = new Products();