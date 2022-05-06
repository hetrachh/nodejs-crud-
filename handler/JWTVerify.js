const jwt = require("jsonwebtoken");
require("dotenv/config");

function JWT(req, res, next) {
  try {
    const secret = process.env.secret;
    const token = req?.headers["authorization"]?.split(" ")[1];
    const tokenDecoded = jwt.verify(token, secret);
    if (Date.now() >= tokenDecoded.exp * 1000) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    delete tokenDecoded.userSave.password;
    req.currentUser = tokenDecoded.userSave;
    next();
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
module.exports = JWT;
