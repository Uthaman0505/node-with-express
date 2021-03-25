const express = require("express");
const router = express.Router();
const authentication = require("../controllers/auth");

router.post("/", authentication);

module.exports = router;
