const express = require("express");
const router = express.Router();
const { get_coordinates } = require("../controller/address_controller");

router.post("/save_address", get_coordinates);

module.exports = router;
