const express = require("express");
const router = express.Router();

//
const canMyPetEatRelationController = require("../controllers/canMyPetEatRelation.controller");

router.get(
  "/readAll",
  canMyPetEatRelationController.getAllCanMyPetEatRelations
);
router.get(
  "/readById/:id",
  canMyPetEatRelationController.getCanMyPetEatRelationById
);
router.get(
  "/readByIdPet/:id",
  canMyPetEatRelationController.getCanMyPetEatRelationByIdPet
);
router.get(
  "/readByIdFood/:id",
  canMyPetEatRelationController.getCanMyPetEatRelationByIdFood
);
router.post("/create", canMyPetEatRelationController.insertCanMyPetEatRelation);
router.delete(
  "/delete/:id",
  canMyPetEatRelationController.deleteCanMyPetEatRelation
);
router.put(
  "/update/:id",
  canMyPetEatRelationController.updateCanMyPetEatRelation
);

module.exports = router;
