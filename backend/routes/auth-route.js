const express = require("express");
const router = express.Router();
const authConroller = require("../controller/auth-controller");
// const signupValidation = require("../validators/auth-validator");
const validation = require("../middlewares/validate-middleware");
const authValidation = require("../validators/auth-validator");

router.route("/").get(authConroller.home);
router
  .route("/register")
  .post(validation(authValidation.signupValidation), authConroller.register);
router
  .route("/login")
  .post(validation(authValidation.loginValidation), authConroller.login);

module.exports = router;
