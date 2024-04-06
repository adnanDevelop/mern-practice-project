const User = require("../models/user-model");
const bcrypt = require("bcrypt");

/****** HOME ROUTE ********/
const home = async (req, res) => {
  try {
    const user = await User.find({});
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json("Page not found");
  }
};

/****** REGISTER ROUTE  ********/
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });

    // IF EMAIL ALREADY EXIST THEN IT RETURN AN ERROR
    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }

    // HASH THE PASSWORD    THIS IS FIRST METHOD FOR HASING THE PASSWORD AND THE SECOND METHOD IS IN THE MODAL FILE
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      // password: hash_password,
      password,
    });

    res.status(201).json({
      message: "Registration successfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(400).json("Page not found");
  }
};

/******  LOGIN ROUTE ********/
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userData = await User.findOne({ email });

    // IS USER EMAIL EXIST OR NOT
    if (!userData) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // COMPARING PASSWORD
    // const isPasswordValid = await bcrypt.compare(password, userData.password);
    const isPasswordValid = await userData.comparePassword(password);

    if (isPasswordValid) {
      // Only one response should be sent here
      const token = await userData.generateToken();
      res.status(201).json({
        message: "Login successfull",
        token,
        userId: userData._id.toString(),
      });
    } else {
      res.status(401).json("Invalid email or password");
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

module.exports = { home, register, login };
