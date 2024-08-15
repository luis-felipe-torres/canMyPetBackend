const express = require("express");
const router = express.Router();

const petController = require("../controllers/pet.controller");

router.get("/readAll", petController.getAllPets);
router.get("/readById/:id", petController.getPetById);
router.post("/create", petController.insertPet);
router.delete("/delete/:id", petController.deletePet);
router.put("/update/:id", petController.updatePet);

module.exports = router;
