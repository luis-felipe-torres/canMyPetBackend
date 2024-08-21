"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class TypeFood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TypeFood.hasMany(models.Food, {
        foreignKey: "idTypeFood",
      });
    }
  }
  TypeFood.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TypeFood",
      tableName: "TypeFoods",
    }
  );
  return TypeFood;
};
