////MODULARIZATION WITH MODELS:
    ////the models file will contain all of the mongoose connection and schema definitions

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/products_db');
    var ProductSchema = new mongoose.Schema({
        title: {type: String, required: true, minlength: 4},
        price: {type: Number, required: true},
        imageUrl: {type: String, required: false}
    }, {timestamps: true});
    mongoose.model('Product', ProductSchema); 
    var Product = mongoose.model('Product');

    ////Export Product so Controllers has access to it
    module.exports = Product;