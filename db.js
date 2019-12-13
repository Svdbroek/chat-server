const Sequelize = require("sequelize");

const databaseUrl = "postgres://postgres:cheesecake@localhost:5432/postgres";

const db = new Sequelize(databaseUrl);

db.sync({ force: false }).then(
  console.log("database hooked up and ready to fire")
);

module.exports = db;
