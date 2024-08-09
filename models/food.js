"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Food.hasMany(models.CanMyPetEatRelation, {
        foreignKey: "idFood",
      });
      Food.belongsTo(models.TypeFood, {
        foreignKey: "id",
        targetKey: "idTypeFood",
      });
    }
  }
  Food.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      idTypeFood: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Food",
    }
  );
  return Food;
};
