var Admin = require("../model/Admin");

const admins = [
  { code: "admin123" },
  { code: "admin456" },
  { code: "admin789" },
  { code: "admin111" },
  { code: "admin112" },
  { code: "admin113" },
  { code: "admin114" },
  { code: "admin115" },
  { code: "admin116" },
  { code: "admin117" },
];

async function seedAdmins() {
  await Admin.insertMany(admins);
}

module.exports = {
  seedAdmins: seedAdmins,
};
