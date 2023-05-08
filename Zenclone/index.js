const express = require("express");
const bodyparser = require("body-parser");
const APP_SERVER = require("./app");
const ENV = require("dotenv");

/**
 * CONFIGURING ENVIRONMENT VARIABLES
 */
ENV.config();
const NODE_SERVER = express();

/**
 * ADDING MIDDLEWARES TO NODE_SERVER
 */
NODE_SERVER.use(bodyparser.json());
NODE_SERVER.use(bodyparser.urlencoded({ extended: true }));

/**
 * CONNECTING MONGO DATABASE WITH NODE APPLICATION
 */
require("./dbconfig");

/**
 * ATTACHING APP_SERVER TO NODE_SERVER
 */
NODE_SERVER.use("/api", APP_SERVER);

/**
 * CONFIGURE NODE SERVER
 * PORT TO ACCEPT/SEND REQUEST/RESPONSE = 5000
 */
NODE_SERVER.listen(process.env.NODE_DEVELOPMENT_PORT, "localhost", () => {
  console.log("SERVER STARTED ON PORT", process.env.NODE_DEVELOPMENT_PORT);
});

console.log(process.env);
