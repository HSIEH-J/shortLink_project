const router = require("express").Router();
const { generateShortLink, findUrl, showRedirectTimes } = require("../controller/short_link_controller");
// const { authentication } = require("../../util/util");

// authentication(),
router.route("/link").post(generateShortLink);
router.route("/times").post(showRedirectTimes);
router.route("/:url").get(findUrl);

module.exports = router;
