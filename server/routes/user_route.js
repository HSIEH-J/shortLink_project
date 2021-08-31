const router = require("express").Router();
const { signUpAuthenticate, loginAuthenticate, logout, test } = require("../controller/user_controller");

router.route("/signup").post(signUpAuthenticate);
router.route("/login").post(loginAuthenticate);
router.route("/logout").get(logout);
router.route("/cookie").get(test);

module.exports = router;
