/*
WHAT IS SCHEMA?
SCHEMA DEFINE THE STRUCTURE OF DOCUMENTS WITHIN A COLLECTIONS. IT SPECIFIES THE FIELDS, THEIR TYPES AND ANY ADDITIONAL VALIDATIONS.
*/

/*
What is Model?
Model act as higher level abstraction that interact with database based on the defined schema. It represent a collecion and provides and interface for creating , updating and deleting documents in that collection. Model are created from schema and enable you to work with mongodb data in a more structured manner in our application.
*/

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// USER SCHEMA
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: { type: Boolean, default: false },
});

// HASING THE PASSWORD
userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

// JSON WEBTOKENS

const User = new mongoose.model("User", userSchema);
module.exports = User;
