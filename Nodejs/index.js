const express = require("express"); // HELP US TO CREATE HTTP WEB-SERVER
const NODE_SERVER = express();
const APP_SERVER = require("./appServer");

/**
 * CREATING AN WEB SERVER WHICH USES HTTP PROTOCOL
 * WHICH SERVERS ALL TYPES OF CLIENT REQUEST
 */
const PORT = 4000;

/**
 * REGISTERING APP SERVER
 */
NODE_SERVER.use("/", APP_SERVER);

try {
  NODE_SERVER.listen(PORT, "localhost", () => {
    console.log("SERVER STARTED", PORT);
  });
} catch (error) {
  console.log("ERROR OCCURED", error);
}
