import foodRepository from "../repository/food.repository.js";

class FoodController {
  async getAllFoods(req, res, next) {
    try {
      const foods = await foodRepository.findAll();
      res.json(foods);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getFoodById(req, res, next) {
    try {
      const food = await foodRepository.findById(req.params.id);
      res.json(food);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async getFoodByTypeFoodId(req, res, next) {
    try {
      const food = await foodRepository.findByTypeFood(req.params.id);
      res.json(food);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async insertFood(req, res, next) {
    try {
      const newFood = await foodRepository.create(req.body);
      res.status(201).json(newFood);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateFood(req, res, next) {
    try {
      const updatedFood = await foodRepository.update(req.params.id, req.body);
      res.json(updatedFood);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async deleteFood(req, res, next) {
    try {
      const result = await foodRepository.delete(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new FoodController();
