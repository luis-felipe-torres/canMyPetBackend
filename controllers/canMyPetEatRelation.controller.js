const canMyPetEatRelationRepository = require("../repository/canmypeteatrelation.repository");

class CanMyPetEatRelationController {
  async getAllCanMyPetEatRelations(req, res, next) {
    try {
      const canMyPetEatRelations =
        await canMyPetEatRelationRepository.findAll();
      res.json(canMyPetEatRelations);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getCanMyPetEatRelationById(req, res, next) {
    try {
      const canMyPetEatRelation = await canMyPetEatRelationRepository.findById(
        req.params.id
      );
      res.json(canMyPetEatRelation);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async getCanMyPetEatRelationByIdPet(req, res, next) {
    try {
      const canMyPetEatRelation =
        await canMyPetEatRelationRepository.findByIdPet(req.params.id);
      res.json(canMyPetEatRelation);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async getCanMyPetEatRelationByIdFood(req, res, next) {
    try {
      const canMyPetEatRelation =
        await canMyPetEatRelationRepository.findByIdFood(req.params.id);
      res.json(canMyPetEatRelation);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async insertCanMyPetEatRelation(req, res, next) {
    try {
      const newCanMyPetEatRelation = await canMyPetEatRelationRepository.create(
        req.body
      );
      res.status(201).json(newCanMyPetEatRelation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateCanMyPetEatRelation(req, res, next) {
    try {
      const updatedCanMyPetEatRelation =
        await canMyPetEatRelationRepository.update(req.params.id, req.body);
      res.json(updatedCanMyPetEatRelation);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async deleteCanMyPetEatRelation(req, res, next) {
    try {
      const result = await canMyPetEatRelationRepository.delete(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

module.exports = new CanMyPetEatRelationController();
