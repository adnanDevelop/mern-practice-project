const mongoose = require("mongoose");

const contactData = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

const contactFormData = new mongoose.model("contactFormData", contactData);
module.exports = contactFormData;
