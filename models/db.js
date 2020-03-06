const mysql = require("mysql");
const dbConfig = require("../appli_fil_rouge_back_end/configuration/db.config");

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});


connection.connect(error => {
  if (error) throw error;
  console.log("Connexion réussie avec votre base de donées.");
});

module.exports = connection;