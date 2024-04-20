const express = require("express");
const router = express.Router();
const authConroller = require("../controller/auth-controller");
// const signupValidation = require("../validators/auth-validator");
const authValidation = require("../validators/auth-validator");
const validation = require("../middlewares/validate-middleware");
const authMiddleWare = require("../middlewares/auth-middleware");

router.route("/").get(authConroller.home);
router
  .route("/register")
  .post(validation(authValidation.signupValidation), authConroller.register);
router
  .route("/login")
  .post(validation(authValidation.loginValidation), authConroller.login);
router.route("/user").get(authMiddleWare, authConroller.getUser);
router.route("/contactform").post(authConroller.contactForm);

module.exports = router;
