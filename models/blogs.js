"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blogs extends Model {
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
            title: "required",
            description: "required",
            author: "required",
            category_id: "required",
          };
          break;
        default:
          rules = {};
      }
      return rules;
    };
  }
  Blogs.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      status: DataTypes.BOOLEAN,
      category_id: DataTypes.INTEGER,
      author: DataTypes.STRING,
      is_deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Blogs",
    }
  );
  return Blogs;
};
