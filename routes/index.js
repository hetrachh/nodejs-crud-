const AuthController = require("../controllers/auth.controller");
const BlogController = require("../controllers/blog.controller");

module.exports = (app) => {
  //Authentication Routes
  app.post("/api/login", async function (req, res, next) {
    return await AuthController.login(req, res, next);
  });
  app.post("/api/signup", async function (req, res, next) {
    return await AuthController.signup(req, res, next);
  });

  //Blog Related Routes
  app.get("/api/blog", async function (req, res, next) {
    return await BlogController.listItem(req, res, next);
  });
  app.post("/api/blog", async function (req, res, next) {
    return await BlogController.createItem(req, res, next);
  });
  app.put("/api/blog/:id", async function (req, res, next) {
    return await BlogController.updateItem(req, res, next);
  });
  app.get("/api/blog/:id", async function (req, res, next) {
    return await BlogController.getItem(req, res, next);
  });
  app.delete("/api/blog/:id", async function (req, res, next) {
    return await BlogController.deleteItem(req, res, next);
  });
};
