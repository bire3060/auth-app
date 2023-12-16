const db = require("../config/db");
const { seedAdmins } = require("./admin");
const { seedUsers } = require("./user");

const seedItems = async () => {
  await seedUsers();
  await seedAdmins();
  //arrange order based on your need
  // await seedUsers()
  console.log("Items seeded successfully!!!");
  process.exit();
};

db.once("open", function () {
  seedItems();
});
