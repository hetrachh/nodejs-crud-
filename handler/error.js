function err(err, req, res, next) {
  if (err.status === 401) {
    res.status(401).json({ message: "UnAuthorized" });
  }
  if (err.status === 500) {
    res.status(500).json({ message: "internal server error" });
  }
}

module.exports = err;
