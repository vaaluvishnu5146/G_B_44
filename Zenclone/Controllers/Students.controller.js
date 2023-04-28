const StudentRouter = require("express").Router();
const StudentModel = require("../Models/Student.model");
const { response } = require("../app");

StudentRouter.get("/", function (req, res, next) {
  return res.status(200).json({
    message: "Student router working",
  });
});

/**
 * METHOD = POST
 * METHOD PATH = /createStudent
 * INPUT = Student details
 * OUTPUT = Created student details / error
 */

StudentRouter.post("/createStudent", function (req, res, next) {
  const {
    studentName,
    studentEmail,
    studentContactNumber,
    courseId,
    primaryLanguage,
    secondaryLanguage,
    mentors,
  } = req.body;

  const newStudent = new StudentModel({
    studentName,
    studentEmail,
    studentContactNumber,
    courseId,
    primaryLanguage,
    secondaryLanguage,
    mentors,
  });

  newStudent
    .save()
    .then((response) => {
      if (response._id) {
        return res.status(200).json({
          success: true,
          message: "Student creatd successfully!!!",
          response,
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "Error creating student!!!",
          response,
        });
      }
    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        message: "BAD RESUEST!!!",
        error: error,
      });
    });
});

/**
 * METHOD = PATCH
 * METHOD PATH = /updateStudent
 * INPUT = Student details
 * OUTPUT = Created student details / error
 */

StudentRouter.patch("/updateStudent", function (req, res, next) {
  const {
    studentId,
    studentName,
    studentEmail,
    studentContactNumber,
    courseId,
    primaryLanguage,
    secondaryLanguage,
    mentors,
  } = req.body;

  StudentModel.updateOne(
    { _id: studentId },
    {
      $set: {
        studentName,
        studentEmail,
        studentContactNumber,
        courseId,
        primaryLanguage,
        secondaryLanguage,
        mentors,
      },
    }
  )
    .then((response) => {
      if (response && response.acknowledged && response.modifiedCount === 1) {
        return res.status(200).json({
          success: true,
          message: "Student creatd successfully!!!",
          response,
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "Error creating student!!!",
          response,
        });
      }
    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        message: "BAD RESUEST!!!",
        error: error,
      });
    });
});

module.exports = StudentRouter;
