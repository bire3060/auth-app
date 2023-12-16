const app = require("./app");
const config = require("./config");
const db = require("./config/db");

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("close", () => {
  console.log("DB connection is close");
});
db.once("open", () => {
  console.log("Connected to MongoDB database!");
});

process.on("uncaughtException", (err) => {
  // console.log(err.name);
  console.log(err.message);
  console.log("UNCAUGHT EXCEPTION! Shutting down...");
  process.exit(1);
});

console.log(`Environment: ${config.app.env}`);

const port = config.app.port || 4000;
//Server start
const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name);
  console.log(err.message);
  console.log("UNHANDLED REJECTION! Shutting down...");
  //CLOSE SERVER AT FIRST SO THAT ALL PENDING TASKS ARE COMPLETED AND PROCESS EXITS GRACEFULLY
  server.close(() => {
    process.exit(1);
  });
});
