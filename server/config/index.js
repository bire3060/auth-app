const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const config = {
  app: {
    name: process.env.APP_NAME || "app_name",
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || "8080",
    isDev: process.env.NODE_ENV === "development",
  },
  db: {
    mongo_uri: process.env.MONGO_URI,
  },
};

module.exports = config;
