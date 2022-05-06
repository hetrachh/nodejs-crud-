const Model = require("../models/index");

module.exports.listItem = async (req, res, next) => {
  try {
    const blogs = await Model.Blogs.findAndCountAll({
      where: {
        is_deleted: 0,
      },
    });

    return res.status(200).json({ data: blogs, message: "Blog List" });
  } catch (e) {
    console.log(e);
  }
};

module.exports.createItem = async (req, res, next) => {
  try {
    const data = req.body;
    // Title
    //   Description
    //   publised_date
    //   modify_date
    //   status (Publish, Unpublish)
    //   category
    data["category_id"] = 1;
    const blogSave = await Model.Blogs.create(data);
    return res.status(200).json({ data: blogSave, message: "Blog Created" });
  } catch (e) {
    console.log(e);
  }
};

module.exports.getItem = async (req, res, next) => {
  res.status(200).json({ message: "Works" });
};

module.exports.updateItem = async (req, res, next) => {
  res.status(200).json({ message: "Works" });
};

module.exports.deleteItem = async (req, res, next) => {
  res.status(200).json({ message: "Works" });
};
