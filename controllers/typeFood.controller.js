const typeFoodRepository = require("../repository/typeFood.repository");

class TypeFoodController {
  async getAllTypesFoods(req, res) {
    console.log(req.body);

    const users = await typeFoodRepository.findAll();
    res.json(users);
  }
}

module.exports = new TypeFoodController();
