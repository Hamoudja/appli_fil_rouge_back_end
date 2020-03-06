const express = require("express");
var cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());
app.use(cors());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Salut" });
});
require("../appli_fil_rouge_back_end/routes/routes")(app);

app.listen(5555, () => {
  console.log("Server port 5555.");
});