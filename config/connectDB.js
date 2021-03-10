const mongoose = require("mongoose");
const config = require("config");
const dbconnect = config.get("mongoURI");

const connectDB = async () => {
  console.log("db connect", dbconnect);
  try {
    await mongoose.connect(dbconnect, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;

// passord:
// Pass1234
