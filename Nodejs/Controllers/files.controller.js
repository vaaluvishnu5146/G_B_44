const FilesRouter = require("express").Router();
const filesystem = require("fs");
const path = require("path");
const { getFileName } = require("../utils/calendar");
/**
 * GET, POST, PUT, DELETE, PATCH
 */

/**
 * GET_ALL_COUNTRIES route will fetch all the countries details from 'countries' collections
 */
FilesRouter.post("/createFile", function (req, res, next) {
  const notes = `./fileSystem/${getFileName(new Date())}`;
  try {
    filesystem.writeFile(notes, "New File");
    return res.status(200).json({
      message: "File created successfully!!!",
    });
  } catch (error) {
    return res.status(501).json({
      message: "Error creating file!!!",
    });
  }
});

module.exports = FilesRouter;
