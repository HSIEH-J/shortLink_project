const links = require("../models/short_link_model");

const getTimeStamp = () => {
  const date = Date.now();
  const timestamp = Math.floor(date / 1000); ;
  return timestamp;
};

// generate short links
const generateShortLink = async (req, res, next) => {
  try {
    // check isURL
    //
    //
    const url = req.body.url;
    // generate short link
    const shortLink = "https://www.isho.xyz/" + getTimeStamp();
    const result = await links.shortLink(url, shortLink);
    console.log(result);
    res.json(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// find original URL and redirect
const findUrl = async (req, res) => {
  console.log(req.params.url);
  const { url } = req.params;
  if (url) {
    res.redirect("https://ithelp.ithome.com.tw/articles/10200658");
    return;
  }
  res.json("return");
  // res.send("findUrl");
};

module.exports = { generateShortLink, findUrl };
