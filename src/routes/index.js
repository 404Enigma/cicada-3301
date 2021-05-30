const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/index");
});

router.get("/main", (req, res) => {
  let options = {};

  const lat = req.query.lat;
  const lng = req.query.lng;
  const name = req.query.name;

  if (lat && lng && name) {
    options.lat = lat;
    options.lng = lng;
    options.name = name;
  }

  console.log("options: ", options);

  res.render("pages/main", { options });
});

router.use(require("./address"));

module.exports = router;
