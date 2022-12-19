const express = require("express");
const router = express.Router();

const cityController = require("../../controllers/city-controller.js");
const flightController = require("../../controllers/flight-controller.js")
const airportController = require("../../controllers/airport-controller.js")

router.post("/city", cityController.create);
router.delete("/city/:id", cityController.destroy);
router.get("/city/:id", cityController.get);
router.get("/city", cityController.getAll);
router.patch("/city/:id", cityController.update);

router.post("/flights", flightController.create);
router.get("/flights", flightController.getAll);

router.post("/airports", airportController.create);

module.exports = router;
