const MentorRouter = require("express").Router();
const MentorModel = require("../Models/Mentor.model");

MentorRouter.get("/", function (req, res, next) {
  return res.status(200).json({
    message: "Teacher router working",
  });
});

/**
 * METHOD = POST
 * METHOD PATH = /createMentor
 * INPUT = Mentor details
 * OUTPUT = Created Mentor details / error
 */

MentorRouter.post("/createMentor", function (req, res, next) {
  const {
    mentorName,
    mentorEmail,
    mentorContactNumber,
    skills,
    primaryLanguage,
    secondaryLanguage,
  } = req.body;

  const newMentor = new MentorModel({
    mentorName,
    mentorEmail,
    mentorContactNumber,
    skills,
    primaryLanguage,
    secondaryLanguage,
  });

  newMentor
    .save()
    .then((response) => {
      if (response._id) {
        return res.status(200).json({
          success: true,
          message: "Mentor created successfully!!!",
          response,
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "Error creating mentor!!!",
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

module.exports = MentorRouter;
