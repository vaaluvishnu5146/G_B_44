const mongoose = require("mongoose");

/**
 * WHAT IS MONGOOSE SCHEMA?
 * MONGOOSE SCHEMAS ARE BLUE PRINT FOR WHAT A DOCUMENT OR RECORD OF A SINGLE STUDENT WILL LOOK LIKE
 */
const MentorSchema = mongoose.Schema({
  mentorName: {
    type: String,
    required: true,
  },
  mentorEmail: {
    type: String,
    required: true,
  },
  mentorContactNumber: {
    type: String, // +917010678976
    required: true,
  },
  skills: {
    type: Array,
    required: false,
    default: null,
  },
  primaryLanguage: {
    type: String,
    required: true,
  },
  secondaryLanguage: {
    type: String,
    required: false,
    default: null,
  },
});

module.exports = mongoose.model("mentor", MentorSchema);
