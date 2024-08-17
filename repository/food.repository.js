const { where } = require("sequelize");
const { Food, TypeFood } = require("../models");

class FoodRepository {
  async findAll() {
    try {
      return await Food.findAll({
        include: [
          {
            model: TypeFood,
          },
        ],
      });
    } catch (error) {
      throw new Error("Error fetching all Food records: " + error.message);
    }
  }

  async findById(id) {
    try {
      const food = await Food.findByPk(id, {
        include: [
          {
            model: TypeFood,
          },
        ],
      });
      if (!food) {
        throw new Error(`Food with id ${id} not found`);
      }
      return food;
    } catch (error) {
      throw new Error("Error fetching Food by id: " + error.message);
    }
  }

  async findByTypeFood(IdTypeFood) {
    try {
      const food = await Food.findAll({
        where: {
          idTypeFood: IdTypeFood,
        },
        include: [
          {
            model: TypeFood,
          },
        ],
      });
      if (!food || food.length === 0) {
        throw new Error(`Food with idTypeFood ${IdTypeFood} not found`);
      }
      return food;
    } catch (error) {
      throw new Error("Error fetching Food by idTypeFood: " + error.message);
    }
  }

  async create(foodData) {
    try {
      return await Food.create(foodData);
    } catch (error) {
      throw new Error("Error creating Food record: " + error.message);
    }
  }

  async update(id, foodData) {
    try {
      const [updated] = await Food.update(foodData, { where: { id } });
      if (updated === 0) {
        throw new Error(`Food with id ${id} not found`);
      }
      return await this.findById(id); // Retorna el registro actualizado
    } catch (error) {
      throw new Error("Error updating Food record: " + error.message);
    }
  }

  async delete(id) {
    try {
      const deleted = await Food.destroy({ where: { id } });
      if (!deleted) {
        throw new Error(`Food with id ${id} not found`);
      }
      return { message: `Food with id ${id} deleted successfully` };
    } catch (error) {
      throw new Error("Error deleting Food record: " + error.message);
    }
  }
}

module.exports = new FoodRepository();
