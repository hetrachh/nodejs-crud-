const express = require("express");
const handler = require("./handler/error");
const app = express();

app.use(express.json());
app.use(handler);

require("./routes")(app);

const PORT = 8000;
app.listen(PORT, console.log("App is running"));

module.exports = app;
