const { TypeFood } = require("../models");

class TypeFoodRepository {
  async findAll() {
    return await TypeFood.findAll();
  }

  async findById(id) {
    return await TypeFood.findByPk(id);
  }

  async create(userData) {
    return await TypeFood.create(userData);
  }

  async update(id, userData) {
    return await TypeFood.update(userData, { where: { id } });
  }

  async delete(id) {
    return await TypeFood.destroy({ where: { id } });
  }
}

module.exports = new TypeFoodRepository();
