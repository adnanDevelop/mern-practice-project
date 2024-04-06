const express = require("express");
const router = express.Router();
const authConroller = require("../controller/auth-controller");

router.route("/").get(authConroller.home);
router.route("/register").post(authConroller.register);
router.route("/login").post(authConroller.login);

module.exports = router;
