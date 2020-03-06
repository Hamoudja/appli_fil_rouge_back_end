module.exports = app => {

    const products = require("../controllers/products.controller.js");

    app.post("/create", products.create);

    app.get("/read", products.findAll);

    app.get("/read/:Id", products.findOne);


};