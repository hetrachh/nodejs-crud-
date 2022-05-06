const express = require("express");
const handler = require("./handler/error");
const validateJWT = require("./handler/validateJWT");
const app = express();

app.use(express.json());
app.use(validateJWT());

require("./routes")(app);
app.use(handler);

const PORT = 8000;
app.listen(PORT, console.log("App is running"));

module.exports = app;
