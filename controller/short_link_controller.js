const getTimeStamp = () => {
  const date = Date.now();
  const timestamp = Math.floor(date / 1000); ;
  return timestamp;
};

// generate short links
const generateShortLink = async (req, res) => {
  const url = req.body.url;
  console.log(url);
  const shortLink = "http://localhost:3000/test/" + getTimeStamp();
  res.send(shortLink);
};

// find original URL and redirect
const findUrl = async (req, res) => {
  console.log(req.params.url);
  res.redirect("https://ithelp.ithome.com.tw/articles/10200658");
  // res.send("findUrl");
};

module.exports = { generateShortLink, findUrl };
