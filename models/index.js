"use strict";

require("dotenv").config();
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const db = {};

/*let sequelize = new Sequelize(
  process.env.NAMEDATABASE,
  process.env.USERNAMEDATABASE,
  process.env.PASSWORDDATABASE,
  {
    host: process.env.HOSTDATABASE,
    port: process.env.PORTDATABASE,
    dialect: process.env.DIALECTDATABASE,
  }
);*/
let sequelize = new Sequelize(
  "mysql://avnadmin:AVNS_L-qXH1huSxaIgdBxbMr@canmypetbackend-canmypetbackend.i.aivencloud.com:24125/defaultdb?ssl-mode=REQUIRED"
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database ", error);
  });

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
