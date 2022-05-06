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
  }
  Blogs.init(
    {
      title: DataTypes.STRING,
      published_date: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.getDataValue("created_at");
        },
      },
      modify_date: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.getDataValue("updated_at");
        },
      },
      description: DataTypes.TEXT,
      status: DataTypes.BOOLEAN,
      category_id: DataTypes.INTEGER,
      author: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Blogs",
    }
  );
  return Blogs;
};
