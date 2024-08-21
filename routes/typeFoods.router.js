import express from "express";
const router = express.Router();

import typeFoodController from "../controllers/typeFood.controller.js";

router.get("/readAll", typeFoodController.getAllTypeFoods);
router.get("/readById/:id", typeFoodController.getTypeFoodById);
router.post("/create", typeFoodController.insertTypeFood);
router.delete("/delete/:id", typeFoodController.deleteTypeFood);
router.put("/update/:id", typeFoodController.updateTypeFood);

export default router;
