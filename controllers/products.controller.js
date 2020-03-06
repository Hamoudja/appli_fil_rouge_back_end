const Product = require("../models/products.model");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Contenue vide!"
        });
      }
    
      const product = new Product({
        id: req.body.id,
        nom: req.body.nom,
        Brand: req.body.Brand,
        Price: req.body.Price,
        Quantity: req.body.Quantity,
        idCategorie: req.body.idCategorie
      });
    
    
      Product.create(product, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Erreur aucun produit créer."
          });
        else res.send(data);
      });
};


exports.findAll = (req, res) => {
   Product.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Erreur aucun produit trouvée."
          });
        else res.send(data);
      })
};

exports.findOne = (req, res) => {
   Product.findById(req.params.Id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `L'id n'existe pas ${req.params.Id}.`
          });
        } else {
          res.status(500).send({
            message: "Erreur" + req.params.Id
          });
        }
      } else res.send(data);
    });
  };