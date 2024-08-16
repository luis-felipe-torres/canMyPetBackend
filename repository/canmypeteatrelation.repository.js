const { where, Model } = require("sequelize");
const { CanMyPetEatRelation, Food, TypeFood } = require("../models");

class CanMyPetEatRelationRepository {
  async findAll() {
    try {
      return await CanMyPetEatRelation.findAll({
        include: [
          {
            model: Food,
            include: TypeFood,
          },
        ],
      });
    } catch (error) {
      throw new Error(
        "Error fetching all CanMyPetEatRelation records: " + error.message
      );
    }
  }

  async findById(id) {
    try {
      const canMyPetEatRelation = await CanMyPetEatRelation.findByPk(id);
      if (!canMyPetEatRelation) {
        throw new Error(`CanMyPetEatRelation with id ${id} not found`);
      }
      return canMyPetEatRelation;
    } catch (error) {
      throw new Error(
        "Error fetching CanMyPetEatRelation by id: " + error.message
      );
    }
  }

  async findByIdPet(IdPet) {
    try {
      const canMyPetEatRelation = await CanMyPetEatRelation.findAll({
        where: {
          idPet: IdPet,
        },
      });
      if (!canMyPetEatRelation || canMyPetEatRelation.length === 0) {
        throw new Error(`CanMyPetEatRelation with idPet ${IdPet} not found`);
      }
      return canMyPetEatRelation;
    } catch (error) {
      throw new Error(
        "Error fetching CanMyPetEatRelation by idPet: " + error.message
      );
    }
  }

  async findByIdFood(IdFood) {
    try {
      const canMyPetEatRelation = await CanMyPetEatRelation.findAll({
        where: {
          idFood: IdFood,
        },
      });
      if (!canMyPetEatRelation || canMyPetEatRelation.length === 0) {
        throw new Error(`CanMyPetEatRelation with idFood ${IdFood} not found`);
      }
      return canMyPetEatRelation;
    } catch (error) {
      throw new Error(
        "Error fetching CanMyPetEatRelation by idFood: " + error.message
      );
    }
  }

  async create(canMyPetEatRelationData) {
    try {
      return await CanMyPetEatRelation.create(canMyPetEatRelationData);
    } catch (error) {
      throw new Error(
        "Error creating CanMyPetEatRelation record: " + error.message
      );
    }
  }

  async update(id, canMyPetEatRelationData) {
    try {
      const [updated] = await CanMyPetEatRelation.update(
        canMyPetEatRelationData,
        { where: { id } }
      );
      if (updated === 0) {
        throw new Error(`CanMyPetEatRelation with id ${id} not found`);
      }
      return await this.findById(id); // Retorna el registro actualizado
    } catch (error) {
      throw new Error(
        "Error updating CanMyPetEatRelation record: " + error.message
      );
    }
  }

  async delete(id) {
    try {
      const deleted = await CanMyPetEatRelation.destroy({ where: { id } });
      if (!deleted) {
        throw new Error(`CanMyPetEatRelation with id ${id} not found`);
      }
      return {
        message: `CanMyPetEatRelation with id ${id} deleted successfully`,
      };
    } catch (error) {
      throw new Error(
        "Error deleting CanMyPetEatRelation record: " + error.message
      );
    }
  }
}

module.exports = new CanMyPetEatRelationRepository();
