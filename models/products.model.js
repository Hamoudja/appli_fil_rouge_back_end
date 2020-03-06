const sql = require("./db.js");


const Product = function(product) {
  this.id = product.id;
  this.nom = product.nom;
  this.Brand = product.Brand;
  this.Price = product.Price;
  this.Quantity = product.Quantity;
  this.idCategorie = product.idCategorie;
};

Product.create = (newProduct, result) => {
    sql.query("INSERT INTO T_Products SET ?", newProduct, (err, res) => {
      if (err) {
        console.log("erreur: ", err);
        result(err, null);
        return;
      }
  
      console.log("Produit crée avec succées: ", { id: res.insertId, ...newProduct });
      result(null, { id: res.insertId, ...newProduct});
    });
  };

 Product.getAll = result => {
    sql.query("SELECT * FROM T_Products", (err, res) => {
      if (err) {
        console.log("erreur: ", err);
        result(null, err);
        return;
      }
  
      console.log("Les produits: ", res);
      result(null, res);
    });
  };
 Product.findById = (Id, result) => {
    sql.query(`SELECT * FROM T_Products WHERE id = ${Id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Produit trouver: ", res[0]);
        result(null, res[0]);
        return;
      }
  
    
      result({ kind: "Produit pas trouver" }, null);
    });
  };

  module.exports = Product;