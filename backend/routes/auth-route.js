const express = require("express");
const router = express.Router();
const authConroller = require("../controller/auth-controller");

/*
What is express.Router()?
Express.Router() is a min express application without all server configuration. It is a complete middleware and routing system. It have an ability to define routes, middleware and have own set of route handlers.For this reason it referred as a "mini-app".

*/

router.route("/").get(authConroller.home);
router.route("/register").post(authConroller.register);

module.exports = router;
