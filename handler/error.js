function err(err, req, res, next) {
  if (err.name === "Authorization") {
    res.status(401).json({ message: "UnAuthorized" });
  }
}

module.exports = err;
