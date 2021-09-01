const links = require("../models/short_link_model");

function generateUID () {
  let firstPart = (Math.random() * 46656) | 0;
  let secondPart = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
}

// generate short links
const generateShortLink = async (req, res, next) => {
  try {
    const url = req.body.url;
    // check isURL
    if (!url.trim() || !url) {
      return res.status(400).send({ Message: "URL Is Required." });
    }
    // generate short link
    const shortLink = generateUID();
    const shortLinkUrl = "http://localhost:3000/" + shortLink;
    // const shortLinkUrl = "https://www.isho.xyz/" + shortLink;
    const result = await links.shortLink(url, shortLink);
    const linkData = {
      id: result.link.id,
      url: url,
      shortLinkUrl: shortLinkUrl
    };
    res.status(200).json(linkData);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// find original URL and redirect
const findUrl = async (req, res) => {
  console.log(req.params.url);
  const { url } = req.params;
  const result = await links.findUrl(url);
  if (result.error) {
    return res.status(404).send("404 Page Not Found");
  }
  console.log(result);
  return res.status(302).redirect(result.original_url);
};

module.exports = { generateShortLink, findUrl };
