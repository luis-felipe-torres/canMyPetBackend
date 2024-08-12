const express = require("express");
const router = express.Router();

const typeFoodController = require("../controllers/typeFood.controller");

/* GET home page. */
router.get("/", typeFoodController.getAllTypesFoods);

module.exports = router;
