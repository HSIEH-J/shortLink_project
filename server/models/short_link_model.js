const { pool } = require("./mysql");

const shortLink = async (url, shortLink) => {
  const link = {
    url: url,
    shortLink: shortLink
  };
  const result = await pool.query("INSERT INTO links SET original_url = ? , short_link = ?", [url, shortLink]);
  link.id = result[0].insertId;
  return { link };
};

module.exports = { shortLink };
