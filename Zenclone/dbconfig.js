const mongoose = require("mongoose");
mongoose.connect(
  `mongodb://localhost:27017/${process.env.MONGODB_DATABASE_NAME}`
);
