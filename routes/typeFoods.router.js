const express = require("express");
const router = express.Router();

const typeFoodController = require("../controllers/typeFood.controller");

router.get("/readAll", typeFoodController.getAllTypeFoods);
router.get("/readById/:id", typeFoodController.getTypeFoodById);
router.post("/create", typeFoodController.insertTypeFood);
router.delete("/delete/:id", typeFoodController.deleteTypeFood);
router.put("/update/:id", typeFoodController.updateTypeFood);

module.exports = router;
