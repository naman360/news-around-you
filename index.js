const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser());
// Static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

// View engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Routers
const newsRouter = require("./src/routes/news");
app.use("/", newsRouter);
const port = process.env.port || 5010;
app.listen(port, () => console.log(`Listening on port ${port}`));
