const mongoose = require("mongoose");
// const url = "mongodb://127.0.0.1:27017/thapa_project";

const url = process.env.MONGODB_URI;

const dbConnect = async () => {
  try {
    await mongoose.connect(url);
    console.log("Db connected");
  } catch (error) {
    console.log("Db not connected");
  }
};

module.exports = dbConnect;
