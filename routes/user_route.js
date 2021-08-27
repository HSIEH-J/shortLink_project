const router = require("express").Router();
const { signUp, loginAuthenticate, logout } = require("../controller/user_controller");

router.route("/signup").post(signUp);
router.route("/login").post(loginAuthenticate);
router.route("/logout").get(logout);

module.exports = router;
