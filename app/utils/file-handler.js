const fs = require('fs');
const dataPath = './app/utils/product.json';

class FileHandler{

    saveProductData(data){

        const stringifyData = JSON.stringify(data);

        fs.writeFileSync(dataPath, stringifyData);

        return true;
    }

    getProductData(){
        
        const jsonData = fs.readFileSync(dataPath);

        return JSON.parse(jsonData);
    }

}

module.exports = new FileHandler();