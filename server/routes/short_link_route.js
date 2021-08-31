const router = require("express").Router();
const { generateShortLink } = require("../controller/short_link_controller");
const { authentication } = require("../../util/util");

router.route("/link").post(authentication(), generateShortLink);
// router.route("/:url").get(findUrl);

module.exports = router;
