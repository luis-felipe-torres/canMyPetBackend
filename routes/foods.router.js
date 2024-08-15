const express = require("express");
const router = express.Router();

const foodController = require("../controllers/food.contoller");

router.get("/readAll", foodController.getAllFoods);
router.get("/readById/:id", foodController.getFoodById);
router.get("/readByIdTypeFood/:id", foodController.getFoodByTypeFoodId);
router.post("/create", foodController.insertFood);
router.delete("/delete/:id", foodController.deleteFood);
router.put("/update/:id", foodController.updateFood);

module.exports = router;
