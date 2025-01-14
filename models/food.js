"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
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
        foreignKey: "idTypeFood",
        targetKey: "id",
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
      tableName: "Foods",
    }
  );
  return Food;
};
