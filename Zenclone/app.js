const express = require("express");
const StudentRouter = require("./Controllers/Students.controller");
const TeacherRouter = require("./Controllers/Teachers.controller");
const APP_SERVER = express();
// const APP_ROUTER = express.Router();

// APP_SERVER.use();
// APP_ROUTER.get("/", (req, res, next) => {
//   console.log("HITS");
//   return res.status(200).json({
//     message: "Server started",
//   });
// });

/**
 * MODULES INSODE APP_SERVER
 * 1. STUDENT CONTROLLER
 * 2. TEACHERS CONTROLLER
 */
APP_SERVER.use("/student", StudentRouter);
APP_SERVER.use("/mentor", TeacherRouter);

module.exports = APP_SERVER;
