"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pet.hasMany(models.CanMyPetEatRelation, {
        foreignKey: "idPet",
      });
    }
  }
  Pet.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pet",
      tableName: "Pets",
    }
  );
  return Pet;
};
