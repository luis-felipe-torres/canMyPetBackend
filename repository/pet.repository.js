const { Pet } = require("../models");

class PetRepository {
  async findAll() {
    try {
      return await Pet.findAll();
    } catch (error) {
      throw new Error("Error fetching all Pet records: " + error.message);
    }
  }

  async findById(id) {
    try {
      const typeFood = await Pet.findByPk(id);
      if (!typeFood) {
        throw new Error(`Pet with id ${id} not found`);
      }
      return typeFood;
    } catch (error) {
      throw new Error("Error fetching Pet by id: " + error.message);
    }
  }

  async create(typeFoodData) {
    try {
      return await Pet.create(typeFoodData);
    } catch (error) {
      throw new Error("Error creating Pet record: " + error.message);
    }
  }

  async update(id, typeFoodData) {
    try {
      const [updated] = await Pet.update(typeFoodData, { where: { id } });
      if (updated === 0) {
        throw new Error(`Pet with id ${id} not found`);
      }
      return await this.findById(id); // Retorna el registro actualizado
    } catch (error) {
      throw new Error("Error updating Pet record: " + error.message);
    }
  }

  async delete(id) {
    try {
      const deleted = await Pet.destroy({ where: { id } });
      if (!deleted) {
        throw new Error(`Pet with id ${id} not found`);
      }
      return { message: `Pet with id ${id} deleted successfully` };
    } catch (error) {
      throw new Error("Error deleting Pet record: " + error.message);
    }
  }
}

module.exports = new PetRepository();
