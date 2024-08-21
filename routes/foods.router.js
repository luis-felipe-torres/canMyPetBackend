import express from "express";
const router = express.Router();

import foodController from "../controllers/food.contoller.js";

router.get("/readAll", foodController.getAllFoods);
router.get("/readById/:id", foodController.getFoodById);
router.get("/readByIdTypeFood/:id", foodController.getFoodByTypeFoodId);
router.post("/create", foodController.insertFood);
router.post("/createMany", foodController.insertFoods);
router.delete("/delete/:id", foodController.deleteFood);
router.put("/update/:id", foodController.updateFood);

export default router;
