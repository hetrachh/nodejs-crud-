"use strict";
const Model = require("../models/index");

module.exports = {
  async up(queryInterface, Sequelize) {
    const categories = [
      {
        name: "Technology",
        parent: false,
      },
      {
        name: "Mobile",
        parent: "Technology",
      },
      {
        name: "Flutter",
        parent: "Mobile",
      },
      {
        name: "React-Native",
        parent: "Mobile",
      },
    ];
    let i = 0;
    while (categories.length > i) {
      let category = categories[i];
      let parentId = 0;
      if (category.parent) {
        const categoryData = await Model.Category.findOne({
          where: {
            name: category.parent,
          },
        });
        parentId = categoryData.id;
      }
      await queryInterface.bulkInsert("Categories", [
        {
          name: category.name,
          parent_id: parentId,
        },
      ]);
      i++;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
