const product = require('../../models/product');

class Products{

    handleGetProducts(){
        
        return product.getProducts();

    }

    handleAddProduct(productDetails){

       return  product.addProduct(productDetails);

    }

    handleUpdateProduct(productDetails){

        let productId = productDetails['id'];
        delete productDetails['id'];

        return product.updateProduct(productId,productDetails);

    }

    handleDeleteProduct(productDetails){

        return product.deleteProduct(productDetails['id']);

    }
}

module.exports = new Products();