var express = require("express");
var cors = require("cors");
const morgan = require("morgan");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const routeManager = require("./routes");

var app = express();

app.use(cors());

//middleware morgan for development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//body-parser middleware for req.body
app.use(express.json({ limit: "10kb" }));

app.use("/", routeManager);

if (["production", "ci"].includes(process.env.NODE_ENV)) {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("client", "build", "index.html"));
  });
}

//restricting access to routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404)); //passing the error to the next middleware this skip all middleware and go to the error handler
});

//error handler
app.use(globalErrorHandler);

module.exports = app;
