import db from "../models/index.js";
const { Pet } = db;

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
      const pet = await Pet.findByPk(id);
      if (!pet) {
        throw new Error(`Pet with id ${id} not found`);
      }
      return pet;
    } catch (error) {
      throw new Error("Error fetching Pet by id: " + error.message);
    }
  }

  async create(petData) {
    try {
      return await Pet.create(petData);
    } catch (error) {
      throw new Error("Error creating Pet record: " + error.message);
    }
  }
  async createBulk(petDataArray) {
    try {
      return await Pet.bulkCreate(petDataArray);
    } catch (error) {
      throw new Error("Error creating Pet record: " + error.message);
    }
  }

  async update(id, petData) {
    try {
      const [updated] = await Pet.update(petData, { where: { id } });
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

export default new PetRepository();
