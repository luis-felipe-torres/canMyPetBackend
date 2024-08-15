const { TypeFood } = require("../models");

class TypeFoodRepository {
  async findAll() {
    try {
      return await TypeFood.findAll();
    } catch (error) {
      throw new Error("Error fetching all TypeFood records: " + error.message);
    }
  }

  async findById(id) {
    try {
      const typeFood = await TypeFood.findByPk(id);
      if (!typeFood) {
        throw new Error(`TypeFood with id ${id} not found`);
      }
      return typeFood;
    } catch (error) {
      throw new Error("Error fetching TypeFood by id: " + error.message);
    }
  }

  async create(typeFoodData) {
    try {
      return await TypeFood.create(typeFoodData);
    } catch (error) {
      throw new Error("Error creating TypeFood record: " + error.message);
    }
  }

  async update(id, typeFoodData) {
    try {
      const [updated] = await TypeFood.update(typeFoodData, { where: { id } });
      if (updated === 0) {
        throw new Error(`TypeFood with id ${id} not found`);
      }
      return await this.findById(id); // Retorna el registro actualizado
    } catch (error) {
      throw new Error("Error updating TypeFood record: " + error.message);
    }
  }

  async delete(id) {
    try {
      const deleted = await TypeFood.destroy({ where: { id } });
      if (!deleted) {
        throw new Error(`TypeFood with id ${id} not found`);
      }
      return { message: `TypeFood with id ${id} deleted successfully` };
    } catch (error) {
      throw new Error("Error deleting TypeFood record: " + error.message);
    }
  }
}

module.exports = new TypeFoodRepository();
