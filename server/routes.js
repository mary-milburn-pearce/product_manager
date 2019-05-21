//REQUIRE CONTROLLER TO HAVE ACCESS TO ROUTE LOGIC
const controller = require("./controller")

//EXPORT ROUTES SO OUR SERVER.JS CAN ACCESS IT
module.exports = function(app){
    app.get('/products/all', controller.allProducts)  
    app.get('/products/:id', controller.getProduct)
    app.post('/products', controller.addProduct) 
    app.put('/products/:id', controller.updProduct)
    app.delete('/products/:id', controller.remProduct)
}
