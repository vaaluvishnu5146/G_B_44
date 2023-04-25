const express = require("express");
const APP_SERVER = express();
const BODY_PARSER = require("body-parser");

/**
 * REGISTERING MIDDLEWARES
 */
APP_SERVER.use(BODY_PARSER.urlencoded({ extended: true }));
APP_SERVER.use(BODY_PARSER.json());

/**
 * IMPORTING ALL ROUTERS
 */
const CountriesRouter = require("./Controllers/Countries.controller");
const FileRouter = require("./Controllers/files.controller");

/**
 * REGISTERING CONTROLLERS
 */
APP_SERVER.use("/countries", CountriesRouter);
APP_SERVER.use("/filesystem", FileRouter);

module.exports = APP_SERVER;
