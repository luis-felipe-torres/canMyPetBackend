import express from "express";
const router = express.Router();

import petController from "../controllers/pet.controller.js";

router.get("/readAll", petController.getAllPets);
router.get("/readById/:id", petController.getPetById);
router.post("/create", petController.insertPet);
router.delete("/delete/:id", petController.deletePet);
router.put("/update/:id", petController.updatePet);

export default router;
