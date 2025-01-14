import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cargar el archivo Swagger JSON manualmente
const swaggerDocument = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, "./asserts/swagger/CanMyPetBackend.swagger.json"),
    "utf8"
  )
);

import indexRouter from "./routes/index.router.js";
import typeFoodRouter from "./routes/typeFoods.router.js";
import petRouter from "./routes/pets.router.js";
import foodRouter from "./routes/foods.router.js";
import canMyPetEatRelationRouter from "./routes/canmypeteatrelation.router.js";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/typeFood", typeFoodRouter);
app.use("/pet", petRouter);
app.use("/food", foodRouter);
app.use("/canmypeteatrelation", canMyPetEatRelationRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
