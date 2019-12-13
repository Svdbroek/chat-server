const Sequelize = require("sequelize");
const db = require("../db");

const Message = db.define("Message", {
  text: Sequelize.STRING
});

module.exports = Message;
