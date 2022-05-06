"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    validationRequest = async (action) => {
      let rules = {};
      switch (action) {
        case "create":
          rules = {
            first_name: "required",
            last_name: "required",
            email: "required|email",
            password: "required|min:6",
            date_of_birth: "required|date",
          };
          break;
        default:
          rules = {};
      }
      return rules;
    };
  }
  User.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.TEXT,
      date_of_birth: DataTypes.STRING,
      role: DataTypes.BOOLEAN,
      is_deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
