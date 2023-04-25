const CountriesRouter = require("express").Router();
const CountriesMock = require("../__mocks__/resCountries.mocks.json");
/**
 * GET, POST, PUT, DELETE, PATCH
 */

/**
 * GET_ALL_COUNTRIES route will fetch all the countries details from 'countries' collections
 */
CountriesRouter.get("/getAllCountries", function (req, res, next) {
  res.status(200).json({
    message: "Rest countries api is under development",
    data: {
      id: 1,
      foodName: "Shawarma",
      foodDescription: "Shawarma is delicious",
    },
  });
});

/**
 * GET_ALL_COUNTRIES route will fetch all the countries details from 'countries' collections
 */
CountriesRouter.post("/saveCountry", function (req, res, next) {
  console.log(req.body);
  res.status(200).json({
    message: "Rest countries api is under development",
  });
});

module.exports = CountriesRouter;
