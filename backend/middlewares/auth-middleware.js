const jwt = require("jsonwebtoken");
const user = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    res.status(401).json({ message: "Unauthorized HTTP, token not provided" });
  }

  //   ASSUMING TOKEN IN THE FORMAT IS "bareer <token>" removing bareer from start
  const jwtToken = token.replace("Bearer", "").trim();

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    const userData = await user
      .findOne({ email: isVerified.email })
      .select({ password: 0 });

    //   CREATING CUSTOM REQUEST PROPERTIES
    req.user = userData;
    req.token = token;
    req.userId = userData._id;

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized invalid token" });
  }
};

module.exports = authMiddleware;
