let { Validator} = require('express-json-validator-middleware');
exports.validator = new Validator({allErrors: true});

exports.productSchema = {
    type: 'object',
    required: ['name', 'type', 'price'],
    properties: {
        name : {
            type: 'string'
        },
        type : {
            type: 'string'
        },
        price : {
            type : 'number'
        }
    }
};