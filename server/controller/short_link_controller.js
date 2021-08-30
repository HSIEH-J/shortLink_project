const getTimeStamp = () => {
  const date = Date.now();
  const timestamp = Math.floor(date / 1000); ;
  return timestamp;
};

// generate short links
const generateShortLink = async (req, res) => {
  const url = req.body.url;
  console.log(url);
  const shortLink = "http://www.isho.xyz/" + getTimeStamp();
  res.json({ url: url, shortLink: shortLink });
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
