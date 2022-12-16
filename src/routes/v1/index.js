const express = require("express");
const router = express.Router();

const cityController = require("../../controllers/city-controller.js");

router.post("/city", cityController.create);

module.exports = router;