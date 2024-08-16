"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CanMyPetEatRelation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CanMyPetEatRelation.belongsTo(models.Pet, {
        foreignKey: "idPet",
        targetKey: "id",
      });
      CanMyPetEatRelation.belongsTo(models.Food, {
        foreignKey: "idFood",
        targetKey: "id",
      });
    }
  }
  CanMyPetEatRelation.init(
    {
      idPet: DataTypes.INTEGER,
      idFood: DataTypes.INTEGER,
      isAllowed: DataTypes.BOOLEAN,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CanMyPetEatRelation",
      tableName: "CanMyPetEatRelations",
    }
  );
  return CanMyPetEatRelation;
};
