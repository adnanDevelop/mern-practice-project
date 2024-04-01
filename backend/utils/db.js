const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;

const dbConnection = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to database");
  } catch (error) {
    console.log("Db not connected:", error);
  }
};

module.exports = dbConnection;
