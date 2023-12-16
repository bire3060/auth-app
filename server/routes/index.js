var express = require("express");
let router = express.Router();
var greetRouter = require("./greet");
var authRouter = require("./auth");

router.use("/rest/v1/greet", greetRouter);
router.use("/rest/v1/auth", authRouter);

module.exports = router;
