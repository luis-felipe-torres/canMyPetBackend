import typeFoodRepository from "../repository/typeFood.repository.js";

class TypeFoodController {
  async getAllTypeFoods(req, res, next) {
    try {
      const typeFoods = await typeFoodRepository.findAll();
      res.json(typeFoods);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getTypeFoodById(req, res, next) {
    try {
      const typeFood = await typeFoodRepository.findById(req.params.id);
      res.json(typeFood);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async insertTypeFood(req, res, next) {
    try {
      const newTypeFood = await typeFoodRepository.create(req.body);
      res.status(201).json(newTypeFood);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateTypeFood(req, res, next) {
    try {
      const updatedTypeFood = await typeFoodRepository.update(
        req.params.id,
        req.body
      );
      res.json(updatedTypeFood);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async deleteTypeFood(req, res, next) {
    try {
      const result = await typeFoodRepository.delete(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new TypeFoodController();
