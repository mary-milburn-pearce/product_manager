//MODULARIZATION WITH MODELS:
    const Product = require("./models")

    // app.get('/products/all', controller.allProducts)  
    // app.get('/products/:id', controller.getProduct)
    // app.post('/products', controller.addProduct) 
    // app.put('/products/:id', controller.updProduct)
    // app.delete('/products/:id', controller.remProduct)
//EXPORT OUR CONTROLLERS SO OUR ROUTES CAN ACCESS IT
module.exports = {

    allProducts:function(req, res){
//        console.log(req.body, req.params);
        Product.find({}, function(err, products) {
//            console.log(err, products);
            res.json({data: products});
        })
    },

    getProduct:function(req, res) {
        console.log(req.body, req.params);
        Product.findById(req.params.id, function(err, product) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(product);
            }
        })
    },

    addProduct:function(req, res){
        console.log(req.body, req.params);
        Product.create(req.body, function(err, product) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(product);
            }
        })
    },

    updProduct:function(req, res) {
        console.log("Reached updProduct", req.body, req.params);
        Product.findByIdAndUpdate(req.params.id, req.body, 
            function(err, product) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(product);
                }
            })
    },

    remProduct:function(req, res) {
        console.log(req.body, req.params);
        Product.findByIdAndDelete(req.params.id, function(err, product) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(product);
            }
        })
    },



}
