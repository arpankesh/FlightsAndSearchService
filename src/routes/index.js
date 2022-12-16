const epxress = require("express");
const router = epxress.Router();

const v1ApiRouters = require("./v1/index.js");

router.use("/v1", v1ApiRouters);

module.exports = router;