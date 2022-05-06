const Model = require("../models/index");
const Utility = require("../util/common");
const Validator = require("validatorjs");
const Op = Model.Sequelize.Op;

module.exports.listItem = async (req, res, next) => {
  try {
    //TODO: Pagination
    const { page, size, sortKey, sortBy } = req.query;
    const { limit, offset } = await Utility.getPaginated(size, page);
    const blogs = await Model.Blogs.findAndCountAll({
      where: {
        is_deleted: 0,
      },
      include: [
        {
          model: Model.Category,
          include: [
            {
              model: Model.Category,
              as: "category",
            },
          ],
        },
      ],
      order: [[sortKey ? sortKey : "id", sortBy ? sortBy : "DESC"]],
      limit,
      offset,
    });
    const response = await Utility.pagination(blogs, page, limit);
    return res.status(200).json({ data: response, message: "Blog List" });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports.createItem = async (req, res, next) => {
  try {
    const data = req.body;
    const BlogModel = new Model.Blogs();
    const validationRules = await BlogModel.validationRequest("create");
    const validate = new Validator(data, validationRules);
    if (validate.fails()) {
      return res.status(400).json({ message: validate.errors });
    }
    const isCategoryValid = await Model.Category.findOne({
      where: {
        id: data.category_id,
        is_deleted: 0,
      },
    });
    if (!isCategoryValid) {
      return res.status(400).json({ message: "Category not found" });
    }
    const blogSave = await Model.Blogs.create(data);
    return res.status(200).json({ data: blogSave, message: "Blog Created" });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports.getItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    const blog = await Model.Blogs.findOne({
      where: {
        id: id,
        is_deleted: 0,
      },
    });
    if (!blog) {
      return res.status(400).json({ message: "Blog Not found" });
    }
    return res.status(200).json({ data: blog, message: "Blog Found" });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports.updateItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const blog = await Model.Blogs.findOne({
      where: {
        id: id,
        is_deleted: 0,
      },
    });
    if (!blog) {
      return res.status(400).json({ message: "Blog Not found" });
    }
    await blog.update(data);
    return res.status(200).json({ data: blog, message: "Blog Updated" });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports.deleteItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    const blog = await Model.Blogs.findOne({
      where: {
        id: id,
        is_deleted: 0,
      },
    });
    if (!blog) {
      return res.status(400).json({ message: "Blog Not found" });
    }
    await blog.update({ is_deleted: 1 });
    return res.status(200).json({ message: "Blog Deleted" });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};
