require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.use(require("./src/routes/index"));

app.listen(PORT, () => {
  console.log(`Listing on ${PORT}`);
});
