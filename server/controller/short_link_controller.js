const links = require("../models/short_link_model");

const generateUID = () => {
  let firstPart = (Math.random() * 46656) | 0;
  let secondPart = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
};

const checkFormat = (url) => {
  const urls = url.split(":");
  if (urls[0] !== "http" && urls[0] !== "https") {
    return false;
  } else {
    return true;
  }
};

const generateRandomLink = async () => {
  // generate short link random number
  const shortLink = generateUID();
  const checkIsLink = await links.checkIsShortLink(shortLink);
  // if already exits then generate again
  if (!checkIsLink) {
    return generateRandomLink();
  }
  return shortLink;
};

// generate short links
const generateShortLink = async (req, res, next) => {
  try {
    const url = req.body.url;
    // check url format
    if (!checkFormat(url)) {
      return res.status(400).send({ Message: "URL Format Is Incorrect." });
    }
    // check whether url is empty
    if (!url.trim() || !url) {
      return res.status(400).send({ Message: "URL Is Required." });
    }
    // get random short link
    const shortLink = await generateRandomLink();
    // const shortLinkUrl = "http://localhost:3000/" + shortLink;
    const shortLinkUrl = "https://www.isho.xyz/" + shortLink;
    // insert into DB
    const result = await links.shortLink(url, shortLink);
    const linkData = {
      id: result.link.id,
      url: url,
      shortLink: shortLinkUrl,
      status: "img",
      render: "https://stylish-upload.s3.ap-northeast-1.amazonaws.com/witness.png"
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

  return res.status(302).redirect(result.original_url);
};

const showRedirectTimes = async (req, res, next) => {
  try {
    console.log(req.body.data);
    const result = await links.showRedirectTimes(req.body.data);
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { generateShortLink, findUrl, showRedirectTimes, checkFormat };
