const mongoose = require("mongoose");

const serviceModal = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  hours: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const servicesdatas = new mongoose.model("servicesdatas", serviceModal);
module.exports = servicesdatas;
