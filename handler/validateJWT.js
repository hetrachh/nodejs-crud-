const { expressjwt } = require("express-jwt");
require("dotenv/config");

function validateJWT() {
  const secret = process.env.secret;
  return expressjwt({ secret, algorithms: ["HS256"] }).unless({
    path: ["api/login", "api/signup"],
  });
}

module.exports = validateJWT;
