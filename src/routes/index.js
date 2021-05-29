const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("we love the earth");
  res.render("pages/index");
});

router.get("/main", (req, res) => {
  console.log("we love the earth");
  res.render("pages/main");
});

module.exports = router;
