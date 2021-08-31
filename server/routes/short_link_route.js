const router = require("express").Router();
const { generateShortLink } = require("../controller/short_link_controller");
// const { authentication } = require("../../util/util");
// authentication(),
router.route("/link").post(generateShortLink);
// router.route("/:url").get(findUrl);

module.exports = router;
