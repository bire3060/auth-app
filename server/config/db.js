const mongoose = require("mongoose");
const config = require("../config");
const MONGO_URI = config.db.mongo_uri;

console.log("mongo uri: ", MONGO_URI);
mongoose.set("debug", config.app.isDev);
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URI).catch(console.error);
const db = mongoose.connection;

module.exports = db;
