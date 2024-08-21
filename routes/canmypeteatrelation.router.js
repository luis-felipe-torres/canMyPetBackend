import express from "express";
const router = express.Router();

import canMyPetEatRelationController from "../controllers/canMyPetEatRelation.controller.js";

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
router.post(
  "/createMany",
  canMyPetEatRelationController.insertCanMyPetEatRelations
);

router.delete(
  "/delete/:id",
  canMyPetEatRelationController.deleteCanMyPetEatRelation
);
router.put(
  "/update/:id",
  canMyPetEatRelationController.updateCanMyPetEatRelation
);

export default router;
