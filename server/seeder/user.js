var User = require("../model/User");
const users = [
  { code: "user001" },
  { code: '"user002"' },
  { code: "user003" },
  { code: "user111" },
  { code: "user112" },
  { code: "user113" },
  { code: "user114" },
  { code: "user115" },
  { code: "user116" },
  { code: "user117" },
];

async function seedUsers() {
  await User.insertMany(users);
}

module.exports = {
  seedUsers: seedUsers,
};
