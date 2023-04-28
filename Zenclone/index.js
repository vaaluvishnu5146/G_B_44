const express = require("express");
const bodyparser = require("body-parser");
const APP_SERVER = require("./app");
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
const PORT = 5000;
NODE_SERVER.listen(PORT, "localhost", () => {
  console.log("SERVER STARTED ON PORT", PORT);
});
