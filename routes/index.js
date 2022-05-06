const AuthController = require("../controllers/auth.controller");
const BlogController = require("../controllers/blog.controller");
const JWTverify = require("../handler/JWTVerify");
const isAdmin = require("../handler/isAdmin");

module.exports = (app) => {
  //Authentication Routes
  app.post("/api/login", async function (req, res, next) {
    return await AuthController.login(req, res, next);
  });
  app.post("/api/signup", async function (req, res, next) {
    return await AuthController.signup(req, res, next);
  });

  //Blog Related Routes
  app.get("/api/blog", [JWTverify], async function (req, res, next) {
    return await BlogController.listItem(req, res, next);
  });
  app.post("/api/blog", [JWTverify, isAdmin], async function (req, res, next) {
    return await BlogController.createItem(req, res, next);
  });
  app.put(
    "/api/blog/:id",
    [JWTverify, isAdmin],
    async function (req, res, next) {
      return await BlogController.updateItem(req, res, next);
    }
  );
  app.get("/api/blog/:id", [JWTverify], async function (req, res, next) {
    return await BlogController.getItem(req, res, next);
  });
  app.delete(
    "/api/blog/:id",
    [JWTverify, isAdmin],
    async function (req, res, next) {
      return await BlogController.deleteItem(req, res, next);
    }
  );
};
