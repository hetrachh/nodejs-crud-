const Model = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Validator = require("validatorjs");
require("dotenv/config");

module.exports.login = async (req, res, next) => {
  res.status(200).json({ message: "Works" });
};

module.exports.signup = async (req, res, next) => {
  try {
    let data = req.body;
    const UserModel = new Model.User();
    const validationRules = await UserModel.validationRequest("create");
    const validate = new Validator(data, validationRules);
    if (validate.fails()) {
      return res.status(400).json({ message: validate.errors });
    }
    const isRegisterd = await Model.User.findOne({
      where: {
        email: data.email,
        is_deleted: 0,
      },
    });
    if (isRegisterd) {
      return res.status(400).json({ message: "You are already registred" });
    }
    data["password"] = bcrypt.hashSync(data.password, 10);
    data["role"] = 1;
    const userSave = await UserModel.create(data);
    return res
      .status(200)
      .json({ data: userSave, message: "User Created SuccessFully" });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports.login = async (req, res, next) => {
  try {
    let data = req.body;
    const userSave = await Model.User.findOne({
      where: {
        email: data.email,
        is_deleted: 0,
      },
    });
    if (!userSave) {
      return res.status(404).json({ message: "user not found" });
    }
    const secret = process.env.secret;
    if (bcrypt.compareSync(data.password, userSave.password)) {
      //Token
      const token = jwt.sign(
        {
          userSave,
        },
        secret,
        { expiresIn: "1d" } //1 day it will expire
      );
      delete userSave.password;
      const response = {
        token: token,
        user: userSave,
      };
      return res
        .status(200)
        .json({ data: response, message: "Logged in success" });
    }
    return res.status(404).json({ message: "Email Id/Password is wrong" });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};
