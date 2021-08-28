const router = require("express").Router();
const { generateShortLink, findUrl } = require("../controller/short_link_controller");

router.route("/link").post(generateShortLink);
router.route("/test/:url").get(findUrl);

module.exports = router;
