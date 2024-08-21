"use strict";

import "dotenv/config";
import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const basename = path.basename(__filename);
const db = {};

let sequelize = new Sequelize(
  process.env.NAMEDATABASE,
  process.env.USERNAMEDATABASE,
  process.env.PASSWORDDATABASE,
  {
    host: process.env.HOSTDATABASE,
    dialect: process.env.DIALECTDATABASE,
    port: process.env.PORTDATABASE,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database ", error);
  });

async function initializeModels() {
  const files = fs.readdirSync(__dirname).filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  });

  for (const file of files) {
    const model = await import(path.join(__dirname, file));
    const modelInstance = model.default(sequelize, Sequelize.DataTypes);
    db[modelInstance.name] = modelInstance;
  }

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
}

await initializeModels();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
